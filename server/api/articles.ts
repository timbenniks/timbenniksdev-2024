export default defineEventHandler(async (event) => {
  const { username, per_page, collection_id } = getQuery(event)
  const data = await fetch(`https://dev.to/api/articles?username=${username}&state=all${collection_id ? `&collection_id=${collection_id}` : ""}`)

  const result = await data.json()

  const articles = result.map((article: any) => {
    return {
      url: article.url,
      title: article.title,
      description: article.description,
      published_timestamp: article.published_timestamp,
      collection_id: article.collection_id,
      image: article.social_image
    }
  })

  let finalResult = articles;

  if (collection_id) {
    finalResult = articles.filter(article => String(article.collection_id) === String(collection_id))
  }

  return { articles: finalResult.slice(0, per_page ? Number(per_page) : finalResult.length) }
})
