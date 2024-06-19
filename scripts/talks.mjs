import { ofetch } from "ofetch";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

function convertToMarkdown(jsonData) {
  const frontMatter = Object.entries(jsonData)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join("\n");

  const markdownContent = `---\n${frontMatter}\n---\n\n`;
  return markdownContent;
}

async function getTalks() {
  const { data } = await ofetch(process.env.GQL_HOST, {
    method: "post",
    body: {
      query: `
          query Talks($first: Int!) {
            talks(first: $first, orderBy: date_DESC) {
              conference
              talk
              location
              date
              id
              link
            }
          }
          `,
      variables: {
        first: 150,
      },
    },
  });

  data.talks.forEach((talk) => {
    fs.writeFile(
      `./content/5.speaking/${talk.date}-${talk.id}.md`,
      convertToMarkdown(talk),
      (err) => {
        console.log(`Talk: ${talk.date} - ${talk.conference} added.`);

        if (err) {
          console.error(err);
        }
      }
    );
  });
}

getTalks();
