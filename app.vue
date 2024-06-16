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

useJsonld({
  "@context": "http://schema.org",
  "@type": "WebSite",
  url: "https://timbenniks.dev",
  name: "Tim Benniks: developer relations, video creator, speaker",
  alternateName: "Tim Benniks",
});
</script>
<template>
  <main class="mx-auto max-w-[1400px] bg-[#1b1d39] pb-12">
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
