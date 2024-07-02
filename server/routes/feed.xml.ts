import RSS from 'rss';
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const feed = new RSS({
    title: 'Tim Benniks',
    site_url: 'https://timbenniks.dev',
    feed_url: `https://timbenniks.dev/feed.xml`,
  });

  const docs = await serverQueryContent(event, "/writing").find()

  docs.map((post: any) => {
    feed.item({
      title: post.title,
      url: `https://timbenniks.dev${post._path}`,
      description: post.description,
      date: post.date,
      categories: post.tags,
      author: "Tim Benniks",
    });
  })

  event.node.res.setHeader('content-type', 'text/xml');
  return feed.xml({ indent: true });
})