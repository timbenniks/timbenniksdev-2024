---
id: 1406138
slug: "how-to-dynamically-stream-video"
title: "How to dynamically stream video"
description: "Build it yourself or use Cloudinary   Dynamic video streaming is a video delivery technique..."
date: "2023-03-18T21:56:45Z"
image: "https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9wx2ix9t60eajoccgjh7.png"
canonical_url: ""
tags: ["video","cloudinary","streaming"]
collection_id: 22300
reading_time: 11 min read

---

## Build it yourself or use Cloudinary

Dynamic video streaming is a video delivery technique that adjusts the quality of a video stream in real time. It does this according to detected bandwidth and CPU capacity of a user. In this article we will explore the two techniques which allow you to dynamically stream video.

HLS and MPEG-DASH are the two most popular formats out there. Dynamic or adaptive video delivery requires outputting a video in different quality settings along with some additional files. Both HLS and MPEG-DASH have different approaches to the problem.

The process of making adaptive streaming work is complex. Most services out there do not provide an end-to-end solution for this and the ones that do a are quite costly. The adaptive video streaming paradigm is not one that many companies have conquered as it requires specific knowledge and access to hardware. There is a reason we don't have many competitors for Netflix and YouTube. Adaptive streaming of video is hard.

First we’ll go into how adaptive streaming works and then I’ll explain exactly how to do this yourself. It’s much easier than you think once you have the knowledge and the right third party tool to do the heavy lifting.

### How adaptive video delivery works

The video stream adapts itself based on a set of rules. The user’s bandwidth, CPU load and video player resolution on the page. To be able to stream adaptively you need to be able to stream different versions of a video. Each variant is of different quality, has a different bitrate and potentially has a different codec or resolution. Think of it as progressive enhancement in web development. The simplest stream always works and based on the features you have (in this case, CPU power, bandwidth, resolution), you get a nicer looking video stream.

Each adaptive video is also joined by an index file that specifies predefined segments of the video. In the HLS standard these segments are usually 10 seconds long where in MPEG-DASH we use 1 second. There is also a master playlist that points to the available video variations with additional information about each one.

#### An audio playlist adaptation

It’s pretty cool that dynamic video streaming is based on the spec from the M3U8 audio playlist. M3U8 was originally designed for audio files, such as MP3, but nowadays it is commonly used to point media players to audio and video sources.

An adaptive streaming video player uses the playlist information to decide which of the available video variations fits the user’s network conditions, CPU load or resolution best. It can switch to another source at each 10 second segment (these segments can also be shorter, see examples below) if the network conditions change.

This approach works well to minimise bandwidth use and optimise it for a smooth playback for everybody who watches the video stream. It can also be used the other way around, if the streaming service is completely overloaded it can send a video stream with a smaller bitrate or resolution to the viewer.

### About HLS and MPEG-DASH

#### HLS

HLS was originally created by Apple to provide video for the iPhone, but now it’s a common format used across HTML5 web applications. You’ll need to encode your video with H.264 or HEVC/H.265 codecs, which can be decoded by all major browsers. With HLS, the video is chopped up into 10 second intervals and sent to the user.

#### MPEG-DASH

MPEG-DASH is the latest HLS competitor. It was originally created to be an alternative to HLS. It has a few advantages over HLS, mainly because it is open-source. This means the media content publisher community as a whole can contribute to its changes and updates. MPEG-DASH is globally supported and codec agnostic, which means that you can encode video without worrying about codec support. It has lower latency than HLS. It's playlist file is an `.MPD`, which is an `XML` format.

### Doing it yourself

To deliver videos using adaptive streaming you must generate multiple video versions, add an index file per variant and add a master playlist. The formats and encoding for HLS and MPEG-DASH are different for each of these files. If you want to stream using both HLS and MPEG-DASH formats you need to double the effort for every video you want to deliver. Additionally, for MPEG-DASH, the best practice is to deliver the audio and video separately. This stuff is complex and time consuming.

If you are a developer who likes to get into the nitty gritty of `ffmpeg` you can deep dive and create all sources for HLS and MPEG-DASH yourself.

#### DIY steps for MPEG-DASH

MPEG-DASH is simplest to do yourself. Let's give it a go!

Imagine we have a video file called `video.mp4`. To make sure we can adaptively stream the video we need to create video files with different bitrates and an audio file. _Beware that this is a simplified version for illustration purposes. In real life `ffmpeg` has many quirks based what video you give it._

**Step 1: extract the audio**

Extract the audio track:

```
$ ffmpeg -i video.mp4 -c:a copy -vn video-audio.mp4

```
**Step 2: extract and re-encode the video track**

```bash
$ ffmpeg -i video.mp4 -an -c:v libx264 -x264opts 'keyint=24:min-keyint=24:no-scenecut' -b:v 5300k -maxrate 5300k -bufsize 2650k -vf 'scale=-1:1080' video-1080.mp4

$ ffmpeg -i video.mp4 -an -c:v libx264 -x264opts 'keyint=24:min-keyint=24:no-scenecut' -b:v 2400k -maxrate 2400k -bufsize 1200k -vf 'scale=-1:720' video-720.mp4

$ ffmpeg -i video.mp4 -an -c:v libx264 -x264opts 'keyint=24:min-keyint=24:no-scenecut' -b:v 1060k -maxrate 1060k -bufsize 530k -vf 'scale=-1:478' video-480.mp4

$ ffmpeg -i video.mp4 -an -c:v libx264 -x264opts 'keyint=24:min-keyint=24:no-scenecut' -b:v 600k -maxrate 600k -bufsize 300k -vf 'scale=-1:360' video-360.mp4

$ ffmpeg -i video.mp4 -an -c:v libx264 -x264opts 'keyint=24:min-keyint=24:no-scenecut' -b:v 260k -maxrate 260k -bufsize 130k -vf 'scale=-1:242' video-240.mp4
```

The video is encoded using H.264 codec. This forces to have a key frame every 24 frames, in this case, every second. This allows the video to be segmented in chunks of 1 second. The bitrate is evaluated according to the buffer size, so in order to be sure the encoding is close to the requested rate, the buffer size should be lower than the bitrate.

**Step 3: generate the MPD file**

We now have one audio file and five video files. A Media Presentation Description (MPD) file has to be created. An MPD file functions as an index referencing the different video and audio tracks with their bitrate, size and how the segments are ordered.

```
$ MP4Box -dash 1000 -rap -frag-rap -profile onDemand -out video.mpd video-1080.mp4 video-720.mp4 video-480.mp4 video-360.mp4 video-240.mp4 video-audio.mp4
```

The -dash option sets the duration of each segment to one second.

Next to preparing adaptive streaming content MP4Box can do a lot more. So much more in fact that it's best to just read more [here](https://github.com/gpac/gpac/wiki/MP4Box).

**Step 4: configure your webserver**

Make sure your webserver understands `.mpd` files by adding the following mime type: `application/dash+xml` to its config.

**Step 5: make sure your video player understands adaptive streaming**

Implement [dash.js](https://github.com/Dash-Industry-Forum/dash.js) into your video player or build a custom video player around dash.js.

**Concluding**

Obviously, doing this at scale or as a slightly less technical user this process is not realistic. You'll want to automate this completely.

#### Enter: Cloudinary

Next to being market leader in image delivery Cloudinary also provides features for video: from dynamic streaming profiles to cropping the subject perfectly on different video ratios. They even use AI to generate captions for muted videos or meaningful previews.

Today we are discussing the dynamic streaming service they offer. Cloudinary has created [smart pre-defined](https://cloudinary.com/documentation/video_manipulation_and_delivery#adaptive_bitrate_streaming_hls_and_mpeg_dash) streaming profiles to help you out. A streaming profile holds a set of video variation definitions with different qualities, bitrates, and codecs. For example, the one profile specifies 10 different variations ranging from extremely high quality to audio-only. You can also create [custom profiles](https://cloudinary.com/documentation/admin_api#adaptive_streaming_profiles) through their admin API.

Once you have selected a profile, you upload your video file with an eager transformation that instructs the system to generate all the required files for the requested profile in either HLS or MPEG-DASH format. If you want to deliver both formats, add two [eager transformations](https://cloudinary.com/documentation/transformations_on_upload#eager_transformations) within your upload command.

This upload code is for the Node.js SDK.

```js
// This file is to be used in node.js and is for uploading your video file to Cloudinary.
// This will not work in codesandbox and is here only for example purposes.
// Run locally like: `node upload.js`

const cloudinary = require('cloudinary').v2;

// Create a Cloudinary account and fill out your credentials
cloudinary.config({
  cloud_name: '',
  api_key: '',
  api_secret: '',
});

// Upload your file with the Cloudinary Uploader API
cloudinary.uploader
  .upload('<your-video.mp4>', {
    resource_type: 'video',
    eager: [
      // Specify what streaming profile you want to use
      { format: 'm3u8', streaming_profile: '4k' },
      { format: 'mpd', streaming_profile: '4k' },
    ],
    eager_async: true,
    eager_notification_url: '<your-notify-url>',
    public_id: '<your-public-id>', // This will be the public ID of the video
  })
  .then((video) => {
    console.log('File Uploaded');
    console.log(video.public_id);
  })
  .catch((error) => {
    console.log('File Upload Error');
    console.log(error);
  });
```

Now that the file has been uploaded, it generates a bunch of different video and audio streams. These streams are represented in the playlist files below.

For the HLS version of the video this is what comes out as the m3u8 playlist file:

```bash
#EXTM3U

#EXT-X-STREAM-INF:BANDWIDTH=10712000,CODECS="avc1.640028,mp4a.40.2",RESOLUTION=3840x2160
/dwfcofnrd/video/upload/c_limit,w_3840,h_2160,vc_h264:high:4.0,br_35m/v1602940452/cloudinary-dynamic-video-streaming.m3u8

#EXT-X-STREAM-INF:BANDWIDTH=5420000,CODECS="avc1.640028,mp4a.40.2",RESOLUTION=2560x1440
/dwfcofnrd/video/upload/c_limit,w_2560,h_1440,vc_h264:high:4.0,br_16m/v1602940452/cloudinary-dynamic-video-streaming.m3u8

#EXT-X-STREAM-INF:BANDWIDTH=3248000,CODECS="avc1.640028,mp4a.40.2",RESOLUTION=1920x1080
/dwfcofnrd/video/upload/c_limit,w_1920,h_1080,vc_h264:high:4.0,br_8500k/v1602940452/cloudinary-dynamic-video-streaming.m3u8

#EXT-X-STREAM-INF:BANDWIDTH=1400000,CODECS="avc1.4D401F,mp4a.40.2",RESOLUTION=1280x720
/dwfcofnrd/video/upload/c_limit,w_1280,h_720,vc_h264:main:3.1,br_5500k/v1602940452/cloudinary-dynamic-video-streaming.m3u8

#EXT-X-STREAM-INF:BANDWIDTH=876000,CODECS="avc1.4D401F,mp4a.40.2",RESOLUTION=960x540
/dwfcofnrd/video/upload/c_limit,w_960,h_540,vc_h264:main:3.1,br_3500k/v1602940452/cloudinary-dynamic-video-streaming.m3u8

#EXT-X-STREAM-INF:BANDWIDTH=615000,CODECS="avc1.42C01E,mp4a.40.2",RESOLUTION=640x360
/dwfcofnrd/video/upload/c_limit,w_640,h_360,vc_h264:baseline:3.0,br_2m/v1602940452/cloudinary-dynamic-video-streaming.m3u8

#EXT-X-STREAM-INF:BANDWIDTH=411000,CODECS="avc1.42C01E,mp4a.40.2",RESOLUTION=480x270
/dwfcofnrd/video/upload/c_limit,w_480,h_270,vc_h264:baseline:3.0,br_800k/v1602940452/cloudinary-dynamic-video-streaming.m3u8

#EXT-X-STREAM-INF:BANDWIDTH=279000,CODECS="avc1.42C01E,mp4a.40.2",RESOLUTION=320x180
/dwfcofnrd/video/upload/c_limit,w_320,h_240,vc_h264:baseline:3.0,br_192k/v1602940452/cloudinary-dynamic-video-streaming.m3u8
```

For the MPEG-DASH version of the video this is what comes out as the MPD playlist file (I have shortened the file for readability):

```xml
<MPD xmlns="urn:mpeg:dash:schema:mpd:2011" minBufferTime="PT1.500S" type="static" mediaPresentationDuration="PT0H0M28.800S" maxSegmentDuration="PT0H0M2.800S" profiles="urn:mpeg:dash:profile:full:2011">
  <Period duration="PT0H0M28.800S">
    <AdaptationSet segmentAlignment="true" maxWidth="1280" maxHeight="720" maxFrameRate="25" par="16:9" lang="und">
      <Representation id="1" mimeType="video/mp4" codecs="avc1.42C01E" width="320" height="180" frameRate="25" sar="1:1" startWithSAP="1" bandwidth="188841">
        <BaseURL>/dwfcofnrd/video/upload/c_limit,w_320,h_240,vc_h264:baseline:3.0,br_192k/v1602940452/cloudinary-dynamic-video-streaming.mp4dv</BaseURL>
        <SegmentList timescale="12800" duration="25600">
          <Initialization range="0-909" />
          <SegmentURL mediaRange="910-48949" indexRange="910-953" />
          <SegmentURL mediaRange="48950-90844" indexRange="48950-48993" />
          <SegmentURL mediaRange="90845-134433" indexRange="90845-90888" />
          <SegmentURL mediaRange="134434-177434" indexRange="134434-134477" />
          <SegmentURL mediaRange="177435-229116" indexRange="177435-177478" />
          <SegmentURL mediaRange="229117-280431" indexRange="229117-229160" />
          <SegmentURL mediaRange="280432-328048" indexRange="280432-280475" />
          <SegmentURL mediaRange="328049-376769" indexRange="328049-328092" />
          <SegmentURL mediaRange="376770-426815" indexRange="376770-376813" />
          <SegmentURL mediaRange="426816-478009" indexRange="426816-426859" />
          <SegmentURL mediaRange="478010-528551" indexRange="478010-478053" />
          <SegmentURL mediaRange="528552-572601" indexRange="528552-528595" />
          <SegmentURL mediaRange="572602-620003" indexRange="572602-572645" />
          <SegmentURL mediaRange="620004-679828" indexRange="620004-620047" />
        </SegmentList>
      </Representation>
      <Representation id="2" mimeType="video/mp4" codecs="avc1.42C01E" width="480" height="270" frameRate="25" sar="1:1" startWithSAP="1" bandwidth="346668">
        <BaseURL>/dwfcofnrd/video/upload/c_limit,w_480,h_270,vc_h264:baseline:3.0,br_800k/v1602940452/cloudinary-dynamic-video-streaming.mp4dv</BaseURL>
        <SegmentList timescale="12800" duration="25600">
          <Initialization range="0-909" />
          <SegmentURL mediaRange="910-84012" indexRange="910-953" />
          <SegmentURL mediaRange="84013-157030" indexRange="84013-84056" />
          <SegmentURL mediaRange="157031-233498" indexRange="157031-157074" />
          <SegmentURL mediaRange="233499-307813" indexRange="233499-233542" />
          <SegmentURL mediaRange="307814-397973" indexRange="307814-307857" />
          <SegmentURL mediaRange="397974-486089" indexRange="397974-398017" />
          <SegmentURL mediaRange="486090-566671" indexRange="486090-486133" />
          <SegmentURL mediaRange="566672-651620" indexRange="566672-566715" />
          <SegmentURL mediaRange="651621-750051" indexRange="651621-651664" />
          <SegmentURL mediaRange="750052-862906" indexRange="750052-750095" />
          <SegmentURL mediaRange="862907-974846" indexRange="862907-862950" />
          <SegmentURL mediaRange="974847-1059121" indexRange="974847-974890" />
          <SegmentURL mediaRange="1059122-1143744" indexRange="1059122-1059165" />
          <SegmentURL mediaRange="1143745-1248006" indexRange="1143745-1143788" />
        </SegmentList>
      </Representation>
      <Representation id="3" mimeType="video/mp4" codecs="avc1.42C01E" width="640" height="360" frameRate="25" sar="1:1" startWithSAP="1" bandwidth="561940">
      <!-- ... and many more ... -->
    </AdaptationSet>
  </Period>
</MPD>
```

Now that we have the playlist files and all the video streams we can either build our own fancy video player that understands dynamic streaming or we go for the [Cloudinary player](https://cloudinary.com/documentation/cloudinary_video_player). In this case I suggest we use the Cloudinary player as it works out of the box. Check out the code sandbox for a very simple vanilla JavaScript example of loading the player for both HLS and MPEG-DASH.

Try throttling your connection and see the differences in quality. To do this, open your web developer tools (assuming you use chrome), open the network tab and select a different connection type in the dropdown next to the "preserve log" and "Disable cache" checkboxes.

The Cloudinary video player is based on [videojs](https://videojs.com/) and has both the HLS and MPEG-DASH plugins installed by default. In the code sandbox below you'll see both the HLS and the MPEG-DASH version. Beware that the HLS version has better support for showing different statistics than the MPEG-DASH version.

See the code here: [https://codesandbox.io/s/white-cherry-g4ixt](https://codesandbox.io/s/white-cherry-g4ixt)