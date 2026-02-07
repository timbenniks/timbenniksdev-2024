import { ofetch } from "ofetch";
import fs from "fs";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36,gzip(gfe)";
const RE_XML_TRANSCRIPT =
  /<text start="([^"]*)" dur="([^"]*)">([^<]*)<\/text>/g;

function createError(message) {
  return new Error(`[YoutubeTranscript] 🚨 ${message}`);
}

async function fetchTranscript(videoId) {
  if (!videoId || videoId.length !== 11) {
    throw createError("Invalid YouTube video ID provided.");
  }

  const videoPageResponse = await fetch(
    `https://www.youtube.com/watch?v=${videoId}`,
    {
      headers: {
        "User-Agent": USER_AGENT,
      },
    },
  );

  const videoPageBody = await videoPageResponse.text();
  const splittedHTML = videoPageBody.split('"captions":');

  if (splittedHTML.length <= 1) {
    if (videoPageBody.includes('class="g-recaptcha"')) {
      throw createError(
        "YouTube is receiving too many requests from this IP and now requires solving a captcha to continue",
      );
    }
    if (!videoPageBody.includes('"playabilityStatus":')) {
      throw createError(`The video is no longer available (${videoId})`);
    }
    throw createError(`Transcript is disabled on this video (${videoId})`);
  }

  const captions = (() => {
    try {
      return JSON.parse(
        splittedHTML[1].split(',"videoDetails')[0].replace("\n", ""),
      );
    } catch (e) {
      return undefined;
    }
  })()?.["playerCaptionsTracklistRenderer"];

  if (!captions) {
    throw createError(`Transcript is disabled on this video (${videoId})`);
  }

  if (!("captionTracks" in captions)) {
    throw createError(
      `No transcripts are available for this video (${videoId})`,
    );
  }

  const transcriptURL = captions.captionTracks[0].baseUrl;
  const transcriptResponse = await fetch(transcriptURL, {
    headers: {
      "User-Agent": USER_AGENT,
    },
  });

  if (!transcriptResponse.ok) {
    throw createError(
      `No transcripts are available for this video (${videoId})`,
    );
  }

  const transcriptBody = await transcriptResponse.text();
  const results = [...transcriptBody.matchAll(RE_XML_TRANSCRIPT)];

  return results.map((result) => result[3].replaceAll("&amp;#39;", "'"));
}

function convertToMarkdown(jsonData) {
  const frontMatter = Object.entries(jsonData)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join("\n");

  const markdownContent = `---\n${frontMatter}\n---\n\n`;
  return markdownContent;
}

async function fetchAllVideos(playlist_id, pageToken = null) {
  const options = {
    part: "snippet",
    playlistId: playlist_id,
    key: process.env.YOUTUBE_KEY,
    maxResults: 50,
  };

  if (pageToken) {
    options.pageToken = pageToken;
  }

  const data = await ofetch(
    "https://www.googleapis.com/youtube/v3/playlistItems",
    {
      query: options,
    },
  );

  const videos = data.items;
  const nextPageToken = data.nextPageToken;

  if (nextPageToken) {
    const nextPageVideos = await fetchAllVideos(playlist_id, nextPageToken);
    videos.push(...nextPageVideos);
  }

  return videos;
}

function emptyFolder(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const filePath = path.join(folderPath, file);
      fs.unlinkSync(filePath); // Delete each file
    });
    console.log(`Folder "${folderPath}" emptied successfully.`);
  } else {
    console.log(`Folder "${folderPath}" does not exist.`);
  }
}

// async function getPlaylist(playlist_id, folder) {
//   const folderPath = `./content/3.videos/${folder}`;
//   if (!fs.existsSync(folderPath)) {
//     fs.mkdirSync(folderPath, { recursive: true });
//   }

//   emptyFolder(folderPath);

//   const videos = await fetchAllVideos(playlist_id);
//   const mappedVideos = videos.map((video) => {
//     return {
//       date: video.snippet.publishedAt,
//       position: video.snippet.position.toString().padStart(3, "0"),
//       title: video.snippet.title,
//       description: video.snippet.description,
//       image: video.snippet.thumbnails?.maxres?.url,
//       videoId: video.snippet.resourceId.videoId,
//     };
//   });

//   mappedVideos.forEach((video) => {
//     fs.writeFile(
//       `./content/3.videos/${folder}/${video.position}-${video.videoId}.md`,
//       convertToMarkdown(video),
//       (err) => {
//         console.log(`Video: ${video.title} added.`);

//         if (err) {
//           console.error(err);
//         }
//       }
//     );
//   });

//   return mappedVideos;
// }

async function getPlaylist(playlist_id, folder) {
  const folderPath = `./content/3.videos/${folder}`;
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  emptyFolder(folderPath);

  const videos = await fetchAllVideos(playlist_id);
  const mappedVideos = await Promise.all(
    videos.map(async (video) => {
      let transcript = "";
      try {
        // Fetch the transcript for the video
        transcript = (
          await fetchTranscript(video.snippet.resourceId.videoId)
        ).join(" ");
      } catch (error) {
        console.error(
          `Error fetching transcript for video ${video.snippet.title}:`,
          error.message,
        );
        transcript = "Transcript not available.";
      }

      return {
        date: video.snippet.publishedAt,
        position: video.snippet.position.toString().padStart(3, "0"),
        title: video.snippet.title,
        description: video.snippet.description,
        image: video.snippet.thumbnails?.maxres?.url,
        videoId: video.snippet.resourceId.videoId,
        transcript,
      };
    }),
  );

  mappedVideos.forEach((video) => {
    fs.writeFile(
      `./content/3.videos/${folder}/${video.position}-${video.videoId}.md`,
      convertToMarkdown(video),
      (err) => {
        console.log(`Video: ${video.title} added.`);

        if (err) {
          console.error(err);
        }
      },
    );
  });

  return mappedVideos;
}

async function executePlaylistFetches() {
  try {
    // await getPlaylist("PLordIU6tK3nVRzSDaRITfSwBwy7N4JzBf", "headless-creator");
    // await getPlaylist("UULFtNZi1LgSHY1dzSUazplEPg", "mp");
    // await getPlaylist("PLcoeeDyxakhXjJQe4r2b9JRXKUmbW4XOU", "uniform");
    // await getPlaylist("PLcoeeDyxakhWEB0yoQXy6OYbl9LbAo4J2", "hygraph");
    // await getPlaylist("PLcoeeDyxakhWMU9JIKXAQIfwoPwM-TZ93", "live-uniform");
    await getPlaylist("PLcoeeDyxakhVM-xWfqWZ6TFpqC1Aw5__N", "misc-streams");
    // await getPlaylist("PLcoeeDyxakhWoTjzmqTJXvBcov71Am8QG", "live-hygraph");
    // await getPlaylist("PLO9M7FOXF_QvVXYMJGY9eDnxPya9yzQhi", "contentstack");
    // await getPlaylist(
    //   "PLcoeeDyxakhUr0tKVyixJ_fy8J2GtcMJs",
    //   "live-contentstack"
    // );
    // await getPlaylist(
    //   "PLcoeeDyxakhUdkUvZm8qld1YuInOKOLqT",
    //   "alive-and-kicking"
    // );
    //await getPlaylist("UULFbQu3ix36SHZjcD57BK7KUQ", "tim");
  } catch (error) {
    console.error("Error fetching playlists:", error);
  }
}

executePlaylistFetches();
