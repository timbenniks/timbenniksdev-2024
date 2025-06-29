import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const videoData = await serverQueryContent(event, 'videos').find();

  function mapSubject(subject: string) {
    const withUnderscore = subject.replace(/-/g, "_");
    let result = withUnderscore;

    switch (withUnderscore) {
      case 'mp': result = 'middleware_productions'
        break;
      case 'live_contentstack': result = 'contentstack_live'
        break;
      case 'live_hygraph': result = 'hygraph_live'
        break;
      case 'live_uniform': result = 'uniform_live'
        break;
      case 'misc_streams': result = 'personal_live'
        break;
    }

    return result
  }

  const videos = videoData.reduce((acc: Record<string, any>, video) => {
    const uid = video.videoId;

    if (uid) {
      acc[uid] = {
        title: video.title,
        description: video.description,
        date: video.date,
        video_id: video.videoId,
        image_url: video.image,
        transcript: video.transcript,
        taxonomies: [
          { taxonomy_uid: "page_type", term_uid: "video" },
          { taxonomy_uid: "video_categories", term_uid: mapSubject(video._dir) },
        ],
        tags: [],
        locale: "en-us",
        uid: uid,
      };
    }
    return acc;
  }, {});


  return videos
});




