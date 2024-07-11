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
    {
      name: "algolia-site-verification",
      content: "315ACC06D73AB3EA",
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
      src: "https://plausible.io/js/plausible.js",
      defer: true,
      async: true,
      "data-domain": "timbenniks.dev",
      tagPosition: "bodyClose",
    },

    {
      innerHTML: `
        window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
      `,
    },
    {
      type: "module",
      defer: true,
      src: "/youtube.js",
      tagPosition: "bodyClose",
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
      href: `https://timbenniks.dev${route.path}`,
    },
    {
      rel: "alternate",
      type: "application/rss+xml",
      title: "RSS Feed for Tim Benniks",
      href: "/feed.xml",
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
            urlTemplate: "https://timbenniks.dev/q?s={search_term_string}",
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
