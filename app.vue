<script setup lang="ts">
const cfg = useRuntimeConfig();

const env = process.env.NODE_ENV;

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
      type: "speculationrules",
      innerHTML: `
        {
          "prerender": [{
            "urls": ["/", "/about", "/videos", "/writing", "/speaking", "/livestreams", "/presskit", "/alive-and-kicking", "/uses"]
          }]
        }
      `,
    },
    {
      defer: true,
      src: "/_vercel/speed-insights/script.js",
    },
    {
      defer: true,
      src:
        env == "development"
          ? "https://cdn.vercel-insights.com/v1/script.debug.js"
          : "/_vercel/insights/script.js",
    },
    {
      innerHTML: `
        window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
        window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
      `,
    },
  ],
});

useSeoMeta({
  googleSiteVerification: "hif_cn9hF2RVSnTq5HwjSkKrXqJT9Q6BR_FaBBmr-20",
  titleTemplate: "%s - Tim Benniks",
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
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://timbenniks.dev/",
      url: "https://timbenniks.dev/",
      name: "Tim Benniks: developer relations, content creator, speaker",
      isPartOf: { "@id": "https://timbenniks.dev/#website" },
      datePublished: "2024-02-06T17:30:30+00:00",
      dateModified: "2024-06-18T14:07:56+00:00",
      description:
        "This is the personal website of Tim Benniks. This is where you can find my public speaking schedule and my videos.",
      breadcrumb: { "@id": "https://timbenniks.dev/#breadcrumb" },
      inLanguage: "en-US",
      potentialAction: [
        { "@type": "ReadAction", target: ["https://timbenniks.dev/"] },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://timbenniks.dev/#website",
      url: "https://timbenniks.dev/",
      name: "Tim Benniks",
      description:
        "This is the personal website of Tim Benniks. This is where you can find my public speaking schedule and my videos.",
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://timbenniks.dev/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
      inLanguage: "en-US",
    },
  ],
});
</script>
<template>
  <main class="mx-auto max-w-[1400px] bg-[#1b1d39]">
    <globalHeader />
    <NuxtPage />
    <globalFooter />
  </main>
</template>
