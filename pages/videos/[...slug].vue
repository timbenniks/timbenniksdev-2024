<script setup lang="ts">
const route = useRoute();
const folder = route.params.slug;

const title = computed(() => {
  let result = "";

  switch (folder[0]) {
    case "tim":
      result = "Personal videos";
      break;

    case "alive-and-kicking":
      result = "Alive and Kicking videos";
      break;

    case "live-hygraph":
      result = "Hygraph live streams";
      break;

    case "hygraph":
      result = "Hygraph videos";
      break;

    case "live-uniform":
      result = "Uniform live streams";
      break;

    case "misc-streams":
      result = "Personal live streams";
      break;

    case "mp":
      result = "Middleware Productions";
      break;

    case "uniform":
      result = "Uniform Videos";
      break;

    case "headless-creator":
      result = "Headless Creator";
      break;
  }

  return result;
});

const listItemElements = [
  {
    "@type": "ListItem",
    position: 1,
    name: "home",
    item: "https://timbenniks.dev/",
  },
  {
    "@type": "ListItem",
    position: 2,
    name: "videos",
    item: `https://timbenniks.dev/videos`,
  },
  {
    "@type": "ListItem",
    position: 3,
    name: title.value,
    item: `https://timbenniks.dev/videos/${route.params.slug[0]}`,
  },
];

useJsonld({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://timbenniks.dev/#breadcrumb",
      itemListElement: listItemElements,
    },
  ],
});

useSeoMeta({
  title: `Videos about ${title.value}`,
  description: `Video overview for my ${title.value} videos`,
  ogImage:
    "https://res.cloudinary.com/dwfcofnrd/image/upload/w_1280,f_auto,q_auto/Tim/Tim-oct-2020.jpg",
});
</script>

<template>
  <title-block tag="h1" :title="title" />
  <videos :small="false" :folder="folder" :extras="false" />
</template>
