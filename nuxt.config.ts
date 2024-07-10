export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-07-04',
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
      routes: ['/sitemap.xml', '/feed.xml']
    }
  },

  features: {
    // turn on for editing in nuxt.studio
    noScripts: process.env.NO_SCRIPTS === "true" ? true : false,
    inlineStyles: true
  },

  routeRules: {
    '/**': { experimentalNoScripts: true },
    '/q': { experimentalNoScripts: false },
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

  vue: {
    compilerOptions: {
      isCustomElement: tag => ['lite-youtube'].includes(tag)
    }
  },

  content: {
    markdown: {
      anchorLinks: false
    },
    highlight: {
      theme: 'github-dark',
      langs: ['js', 'ts', 'bash', 'html', 'xml', 'vue', 'vue-html']
    }
  }
})