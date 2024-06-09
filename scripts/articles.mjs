import { ofetch } from "ofetch";
import fs from "fs";
import dotenv from "dotenv";
import Bottleneck from "bottleneck";

dotenv.config();

function convertToMarkdown(jsonData) {
  const frontMatter = Object.entries(jsonData)
    .filter(([key]) => key !== "body")
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join("\n");

  const markdownContent = `---\n${frontMatter}\n---\n\n${jsonData.body}`;
  return markdownContent;
}

async function getArticles(username) {
  const data = await ofetch(`https://dev.to/api/articles?username=${username}`);

  const articlesToQuery = data.map((article) => {
    return article.id;
  });

  const limiter = new Bottleneck({
    maxConcurrent: 1,
    minTime: 300,
  });

  const fetchArticle = async (id) => {
    console.log(`Fetching article: ${id}.`);

    return await ofetch(`https://dev.to/api/articles/${id}`);
  };

  const promises = articlesToQuery.map((id) =>
    limiter.schedule(() => fetchArticle(id))
  );

  const resolvedArticles = await Promise.all(promises);

  const finalArticles = resolvedArticles.map((article) => {
    return {
      id: article.id,
      title: article.title,
      description: article.description,
      date: article.published_timestamp,
      image: article.social_image,
      canonical_url: article.canonical_url,
      tags: article.tags,
      collection_id: article.collection_id,
      body: article.body_markdown,
    };
  });

  finalArticles.forEach((article) => {
    fs.writeFile(
      `./content/4.articles/data/${article.slug.slice(0, -5)}.md`,
      convertToMarkdown(article),
      (err) => {
        if (err) {
          console.error(err);
        }
      }
    );
  });
}

getArticles("timbenniks");
