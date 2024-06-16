function toVideo(video: any, fromPlaylist: boolean) {
  return {
    date: video.snippet.publishedAt,
    title: video.snippet.title,
    description: video.snippet.description,
    image: video.snippet.thumbnails?.high?.url.replace("hqdefault", "maxresdefault"),
    videoId: fromPlaylist ? video.snippet.resourceId.videoId : video.id.videoId ? video.id.videoId : video.id
  }

  export default defineEventHandler(async (event) => {
    const { playlist_id, per_page } = getQuery(event)

    const data = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlist_id}&key=${process.env.YOUTUBE_KEY}&maxResults=${per_page || 5}`)

    const result = await data.json()
    let response;

    if (result.error) {
      response = result.error
    }
    else {
      response = result.items.map(video => (toVideo(video, true))).filter((video) => video.title !== 'Deleted video')
    }

    return { videos: response }
  })