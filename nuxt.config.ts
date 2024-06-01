export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/image",
  ],
  fonts: {
    defaults: {
      weights: [400, 700, 900],
    },
  }
})