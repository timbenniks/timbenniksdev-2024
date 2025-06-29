import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const talkData = await serverQueryContent(event, '/speaking').find();

  const talksByUid = talkData.reduce((acc: Record<string, any>, talk) => {
    const uid = talk.id;

    acc[uid] = {
      uid,
      title: `${talk.conference} - ${talk.talk}`,
      conference: talk.conference,
      date: talk.date,
      talk: talk.talk,
      location: talk.location,
      link: talk.link,
      tags: [],
      locale: "en-us",
      ACL: {},
      _version: 1,
      _in_progress: false,
    };

    return acc;
  }, {});


  return talksByUid
});