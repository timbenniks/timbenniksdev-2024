import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  const sitemap = new SitemapStream({
    hostname: 'https://timbenniks.dev'
  })

  const urls = [
    '/',
    '/about',
    '/writing',
    '/livestreams',
    '/presskit',
    '/alive-and-kicking',
    '/speaking',
    '/videos',

    '/videos/tim',
    '/videos/mp',
    '/videos/alive-and-kicking',
    '/videos/headless-creator',
    '/videos/hygraph',
    '/videos/live-hygraph',
    '/videos/live-uniform',
    '/videos/misc-streams',
    '/videos/uniform',

    '/writing/the-content-graph-is-the-future',
    '/writing/what-type-of-content-organization-do-you-need',
    '/writing/the-real-deal-about-content-management-buzzword',
    '/writing/the-future-of-headless-cms-content-federation-with-graphql',
    '/writing/new-job-alert',
    '/writing/this-is-headless-20',
    '/writing/the-lost-promise-of-headless',
    '/writing/level-up-your-collaboration-game-developer-insights-for-winning-with-marketing-pro',
    '/writing/how-to-get-your-webcam-to-look-decent-in-a-few-simple-steps',
    '/writing/why-i-didnt-run-the-2016-marathon',
    '/writing/the-2015-paris-maratho',
    '/writing/my-fitness-story',
    '/writing/make-the-web-greener-luxury-edition',
    '/writing/how-to-dynamically-stream-video',
    '/writing/uniform-is-nuxt-3-read',
    '/writing/digital-experience-platforms-the-old-versus-the-new',
    '/writing/uniform-dxcp-the-what-why-and-how',
    '/writing/how-to-sniff-out-the-glue-monster',
    '/writing/the-future-of-managing-projects-at-agencie',
    '/writing/fast-personalized-pages-with-vercel-edge-middleware-and-uniform',
    '/writing/the-move-from-monolithic-to-composable-architectures',
    '/writing/mach-versus-monolithic-suites',
    '/writing/the-mach-monolith',
    '/writing/the-future-of-jamstack-is-composable'
  ]

  for (const doc of urls) {
    sitemap.write({
      url: doc,
      changefreq: 'monthly'
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})