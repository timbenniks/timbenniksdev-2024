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
</script>

<template>
  <div class="p-12">
    <div id="searchbox" class="text-black"></div>
    <div id="hits"></div>
  </div>
</template>
