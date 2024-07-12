import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const videoData = await serverQueryContent(event, 'videos').find();

  const videos = videoData.map((video) => {
    return {
      title: video.title,
      description: video.description,
      date: video.date,
      image: video.image,
      url: `https://www.youtube.com/watch?v=${video.videoId}`
    }
  })

  return videos
});