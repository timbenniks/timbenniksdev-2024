import { ofetch } from "ofetch";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

async function getTakls() {
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
        first: 100,
      },
    },
  });

  data.talks.forEach((talk) => {
    fs.writeFile(
      `./content/talks/talk-${talk.id}.json`,
      JSON.stringify(talk, "", 2),
      (err) => {
        console.log(`Talk: ${talk.date} - ${talk.conference} added.`);

        if (err) {
          console.error(err);
        }
      }
    );
  });
}

getTakls();
