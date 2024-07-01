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

  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },

  features: {
    // turn on for editing in nuxt.studio
    noScripts: process.env.NO_SCRIPTS === "true" ? true : false,
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
    providers: {
      cloudinaryFetch: {
        name: 'cloudinaryFetch',
        provider: 'cloudinary',
        options: {
          baseURL: "https://res.cloudinary.com/dwfcofnrd/image/fetch/"
        }
      },
      cloudinaryNative: {
        name: 'cloudinaryNative',
        provider: 'cloudinary',
        options: {
          baseURL: "https://res.cloudinary.com/dwfcofnrd/image/upload/"
        }
      }
    }
  },

  content: {
    markdown: {
      anchorLinks: false
    },
    highlight: {
      theme: 'github-dark'
    }
  }
})