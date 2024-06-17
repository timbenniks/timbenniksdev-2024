import { SitemapStream, streamToPromise } from 'sitemap'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const sitemap = new SitemapStream({
    hostname: 'https://timbenniks.dev'
  })

  const docs = await serverQueryContent(event, "/writing").find()

  const writing = docs.map((doc) => {
    return doc._path
  })

  const videos = await serverQueryContent(event, 'videos').only(['_path']).where({ '_path': /^\/videos\/.*\// }).find();

  const videoFolders = [...new Set(videos.map(({ _path }) => {
    const parts = _path?.split('/');

    if (parts) {
      return `/${parts[1]}/${parts[2]}/`;
    }
  }))];

  const urls = [
    '/',
    '/about',
    '/livestreams',
    '/presskit',
    '/alive-and-kicking',
    '/speaking',
    '/videos',
  ]

  urls.push(...writing)
  urls.push(...videoFolders)

  for (const doc of urls) {
    sitemap.write({
      url: doc,
      changefreq: 'monthly'
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})