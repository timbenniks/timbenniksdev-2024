export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-07-04',
  devtools: { enabled: true },

  extends: [
    'github:timbenniks/timbenniks-components'
  ],

  modules: [
    '@nuxt/content',
    "@nuxtjs/tailwindcss",
    "@nuxthq/studio",
    "nuxt-jsonld",
  ],

  nitro: {
    prerender: {
      routes: ['/', '/sitemap.xml', '/feed.xml']
    }
  },

  // features: {
  //   // turn on for editing in nuxt.studio
  //   noScripts: false,
  //   inlineStyles: false
  // },

  vue: {
    compilerOptions: {
      isCustomElement: tag => ['lite-youtube', 'questionnaire-cms'].includes(tag)
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