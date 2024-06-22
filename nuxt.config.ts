export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxthq/studio",
    "nuxt-jsonld",
    "@nuxt/fonts",
    "@nuxtjs/fontaine"
  ],

  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },

  features: {
    noScripts: true,
    inlineStyles: true
  },

  fonts: {
    defaults: {
      weights: [400, 700, 900],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: {
        'sans-serif': ['Trebuchet MS']
      }
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