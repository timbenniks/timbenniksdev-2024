<script setup lang="ts">
useHead({
  meta: [
    {
      "http-equiv": "accept-ch",
      content: "dpr, viewport-width, width",
    },
    {
      "http-equiv": "delegate-ch",
      content:
        "sec-ch-width https://res.cloudinary.com; sec-ch-dpr https://res.cloudinary.com; sec-ch-viewport-width https://res.cloudinary.com;",
    },
    {
      name: "theme-color",
      content: "#ec4899",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
  script: [
    {
      src: "https://plausible.io/js/plausible.js",
      defer: true,
      async: true,
      "data-domain": "timbenniks.dev",
    },
  ],
});

useSeoMeta({
  googleSiteVerification: "hif_cn9hF2RVSnTq5HwjSkKrXqJT9Q6BR_FaBBmr-20",
});

const route = useRoute();
useHead(() => ({
  link: [
    {
      rel: "canonical",
      href: "https://timbenniks.dev" + route.path,
    },
  ],
}));

useJsonld({
  "@context": "http://schema.org",
  "@type": "WebSite",
  url: "https://timbenniks.dev",
  name: "Tim Benniks: developer relations, video creator, speaker",
  alternateName: "Tim Benniks",
});

// useJsonld({
//   "@context": "https://schema.org",
//   "@type": "WebSite",
//   url: "https://www.example.com/",
//   potentialAction: {
//     "@type": "SearchAction",
//     target: {
//       "@type": "EntryPoint",
//       urlTemplate: "https://query.example.com/search?q={search_term_string}",
//     },
//     "query-input": "required name=search_term_string",
//   },
// });
</script>
<template>
  <main class="mx-auto max-w-[1400px] bg-[#1b1d39]">
    <globalHeader />
    <NuxtPage />
    <globalFooter />
  </main>
</template>

<style lang="postcss">
:root {
  font-family: Lato;
}

a.router-link-exact-active {
  @apply border-b-2 border-b-white;
}

a.home-button.router-link-exact-active {
  @apply !border-none;
}
</style>
