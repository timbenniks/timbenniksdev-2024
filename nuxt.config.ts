export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxthq/studio",
    "nuxt-jsonld",
    "@nuxt/fonts",
  ],

  // nitro: {
  //   prerender: {
  //     routes: ['/sitemap.xml']
  //   }
  // },

  routeRules: {
    '/**': { isr: 600 }
  },

  fonts: {
    defaults: {
      weights: [400, 700, 900],
    },
  },

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dwfcofnrd/image/fetch/'
    }
  },

  content: {
    markdown: {
      anchorLinks: false
    }
  }
})