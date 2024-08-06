import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const articleData = await serverQueryContent(event, "/writing").find()

  const articles = articleData.map((article) => {
    return {
      title: article.title,
      url: article.slug,
      canonical_url: article.canonical_url,
      description: article.description,
      date: article.date,
      image: article.image,
      reading_time: article.reading_time,
      tags: article.tags,
      locale: "en-us",
    }
  })

  return articles
});