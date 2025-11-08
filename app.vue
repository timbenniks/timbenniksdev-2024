<script setup lang="ts">
const route = useRoute();
useHead({
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
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "og:site_name",
      content: "Tim Benniks",
    },
    {
      property: "og:url",
      content: `https://timbenniks.dev${route.path}`,
    },
  ],
  htmlAttrs: {
    lang: "en",
  },

  script: [
    {
      innerHTML: `
      !function(){"use strict";var o=window.jstag||(window.jstag={}),r=[];function n(e){o[e]=function(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];r.push([e,t])}}n("send"),n("mock"),n("identify"),n("pageView"),n("unblock"),n("getid"),n("setid"),n("loadEntity"),n("getEntity"),n("on"),n("once"),n("call"),o.loadScript=function(n,t,i){var e=document.createElement("script");e.async=!0,e.src=n,e.onload=t,e.onerror=i;var o=document.getElementsByTagName("script")[0],r=o&&o.parentNode||document.head||document.body,c=o||r.lastChild;return null!=c?r.insertBefore(e,c):r.appendChild(e),this},o.init=function n(t){return this.config=t,this.loadScript(t.src,function(){if(o.init===n)throw new Error("Load error!");o.init(o.config),function(){for(var n=0;n<r.length;n++){var t=r[n][0],i=r[n][1];o[t].apply(o,i)}r=void 0}()}),this}}();
      jstag.init({
        src: 'https://c.lytics.io/api/tag/c4e22848499cfc31ae98dd92f276115a/latest.min.js',
      });
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
  ],
});

useSeoMeta({
  googleSiteVerification: "hif_cn9hF2RVSnTq5HwjSkKrXqJT9Q6BR_FaBBmr-20",
  titleTemplate: "%s - Tim Benniks",
});

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
            urlTemplate: "https://timbenniks.dev/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
      inLanguage: "en-US",
      author: {
        "@type": "Person",
        name: "Tim Benniks",
      },
    },
  ],
});

watch(
  () => route.path,
  (newPath, oldPath) => {
    //@ts-ignore
    window.jstag.pageView();
  }
);
</script>
<template>
  <main class="mx-auto max-w-[1400px] bg-[#1b1d39]">
    <navigation />
    <NuxtPage />
    <globalFooter />
  </main>
</template>
