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
  <div class="px-4 md:px-8 mb-8">
    <TitleBlock
      tag="h1"
      title="Search timbenniks.dev"
      :nospace="true"
      class="mb-8"
    />

    <div class="mb-8">
      <div id="searchbox" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-1 gap-12">
      <div class="search-col flex flex-col md:flex-row">
        <div class="md:w-80 md:pr-12 mb-4">
          <div class="sticky top-[100px]">
            <p class="title text-3xl inline-block mb-4">Articles</p>
            <p class="text-slate-400">
              These are results for blog posts on the site.
            </p>
          </div>
        </div>
        <div id="hits-articles" class="hits"></div>
      </div>
      <div class="search-col flex flex-col md:flex-row">
        <div class="md:w-80 md:pr-12 mb-4">
          <div class="sticky top-[100px]">
            <p class="title text-3xl inline-block mb-4">Videos</p>
            <p class="text-slate-400">
              These are results for videos on the site.
            </p>
          </div>
        </div>
        <div id="hits-videos" class="hits"></div>
      </div>
    </div>
    <div class="search-col flex flex-col md:flex-row">
      <div class="md:w-80 md:pr-12 mb-4">
        <div class="sticky top-[100px]">
          <p class="title text-3xl inline-block mb-4">Pages</p>
          <p class="text-slate-400">
            These are results for general pages on the site.
          </p>
        </div>
      </div>
      <div id="hits-pages" class="hits"></div>
    </div>
  </div>
</template>

<style lang="postcss">
.ais-SearchBox-input {
  @apply p-4 text-xl placeholder:text-white focus:outline-0 border-2 text-white bg-[#000] w-96;
  border-image-slice: 1;
  border-image-source: linear-gradient(89.87deg, #256ad1 7.57%, #d1258c 95.58%);
}

.search-item {
  @apply flex gap-4 flex-col md:flex-row mb-8;
}

.search-item-image {
  @apply w-full md:w-60;
}

.search-item-text {
  @apply max-w-[450px];
}
</style>
