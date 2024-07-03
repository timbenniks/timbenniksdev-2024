import { defineDriver } from "unstorage";
import { ofetch } from "ofetch";

export interface HygraphTalksOptions {
  endpoint: string;
}

export default defineDriver((opts: HygraphTalksOptions) => {
  return {
    name: "hygraphTalks",
    options: opts,

    async hasItem(key) {
      const { data } = await ofetch(opts.endpoint, {
        method: "post",
        body: {
          query: `
            query Talk($id: ID!) {
              talk(where: {id: $id}) {
              conference
                id
                talk
                location
                date
                link
              }
            }
          `,
          variables: {
            id: key,
          },
        },
      });

      return !!data?.data?.talk
    },

    async getItem(key) {
      const { data } = await ofetch(opts.endpoint, {
        method: "post",
        body: {
          query: `
            query Talk($id: ID!) {
              talk(where: {id: $id}) {
              conference
                id
                talk
                location
                date
                link
              }
            }
          `,
          variables: {
            id: key,
          },
        },
      });

      return data.data.talk
    },

    async getKeys() {
      const { data } = await ofetch(opts.endpoint, {
        method: "post",
        body: {
          query: `
            query Talks($first: Int!) {
              talks(first: $first, orderBy: date_DESC) {
                id
              }
            }
            `,
          variables: {
            first: 150,
          },
        },
      });

      return data.data.talks.map((talk: { id: string }) => {
        return talk.id
      })
    },
  };
});