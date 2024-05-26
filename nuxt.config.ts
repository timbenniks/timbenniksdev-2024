export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/image",
    "nuxt-graphql-client"
  ],

  content: {
    sources: {
      talks: {
        driver: 'http',
        name: "talks",
        base: "https://timbenniksdev.nuxt.space/api/talks",
      }
    }
  }
})