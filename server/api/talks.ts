type Talk = {
  conference: string
  talk: string
  location: string
  date: string
  id: string
  link: string
}

export default defineEventHandler(async (event) => {
  const { talks } = await GqlTalks({ first: 100 });

  // return talks.map((talk: Talk) => {
  //   return {
  //     _path: talk.id,
  //     ...talk
  //   }
  // })

  return talks
})