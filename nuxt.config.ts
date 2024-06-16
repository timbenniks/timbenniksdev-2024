export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxthq/studio",
    "nuxt-jsonld"
  ],

  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
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