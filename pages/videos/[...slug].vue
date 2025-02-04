<script setup lang="ts">
const route = useRoute();
const folder = route.params.slug;

const meta = computed(() => {
  let title = "";
  let image = "";

  switch (folder[0]) {
    case "tim":
      title = "Personal videos";
      image =
        "https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto,w_1280/website/personal_videos.jpg";
      break;

    case "alive-and-kicking":
      title = "Alive and Kicking videos";
      image =
        "https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto,w_1280/website/alive_and_kicking.jpg";
      break;

    case "live-hygraph":
      title = "Hygraph live streams";
      image =
        "https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto,w_1280/website/hygraph.jpg";
      break;

    case "hygraph":
      title = "Hygraph videos";
      image =
        "https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto,w_1280/website/hygraph.jpg";
      break;

    case "contentstack":
      title = "Contentstack videos";
      image =
        "https://res.cloudinary.com/dwfcofnrd/image/fetch/f_auto,q_auto,w_1280/https://images.contentstack.io/v3/assets/blt7359e2a55efae483/blt89b04bbebb8ba96c/665b5c9a41d701da4a98f853/Contentstack_OG.webp";
      break;

    case "live-uniform":
      title = "Uniform live streams";
      image =
        "https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto,w_1280/website/uniform.jpg";
      break;

    case "misc-streams":
      title = "Personal live streams";
      image =
        "https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto,w_1280/website/personal_videos.jpg";
      break;

    case "mp":
      title = "Middleware Productions";
      image =
        "https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto,w_1280/website/mp.jpg";
      break;

    case "uniform":
      title = "Uniform Videos";
      image =
        "https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto,w_1280/website/uniform.jpg";
      break;

    case "headless-creator":
      title = "Headless Creator";
      image =
        "https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto,w_1280/website/hc.jpg";
      break;
  }

  return {
    title,
    image,
  };
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
    name: meta.value.title,
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
  title: `Video category: ${meta.value.title}`,
  description: `Video overview for: ${meta.value.title}`,
  ogImage: meta.value.image,
});
</script>

<template>
  <title-block tag="h1" :title="meta.title" />
  <videos :small="false" :folder="folder" :extras="false" />
</template>
