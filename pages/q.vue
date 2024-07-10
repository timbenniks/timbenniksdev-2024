<script lang="ts" setup>
useHead({
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/algoliasearch@4.24.0/dist/algoliasearch-lite.umd.js",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/instantsearch.js@4.60.0/dist/instantsearch.production.min.js",
    },
    {
      type: "module",
      src: "/search.js",
      tagPosition: "bodyClose",
    },
  ],
});

useSeoMeta({
  title: `Search`,
  description: `Search for anything you want and you shall find it!`,
  ogImage:
    "https://res.cloudinary.com/dwfcofnrd/image/upload/w_1280,f_auto,q_auto/Tim/Tim-oct-2020.jpg",
});
</script>

<template>
  <div class="p-12">
    <div id="searchbox" class="text-black"></div>
    <h1>Articles</h1>
    <div id="hits"></div>

    <h2>Pages</h2>
    <div id="hits-secondary"></div>
  </div>
</template>
