<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const props = defineProps(["limit", "small", "firstFeatured"]);

const query: QueryBuilderParams = {
  path: `/writing`,
  sort: [{ date: -1 }],
  where: [{ _dir: { $ne: "" } }, { _empty: { $ne: true } }],
};

if (props.limit) {
  query.limit = props.limit;
}

const smallOrBigClass = computed(() => {
  return props.small
    ? "grid grid-cols-1 md:grid-cols-1 gap-6"
    : "grid grid-cols-1 md:grid-cols-3 gap-6";
});

function parseImage(imageUrl: string) {
  const decodedUrl = decodeURIComponent(imageUrl);

  const parsedImage = decodedUrl.split(
    "https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/"
  )[1];

  let url = "";
  let provider = "";

  if (parsedImage.includes("cloudinary")) {
    const id = parsedImage.split(
      "https://res.cloudinary.com/dwfcofnrd/image/upload/"
    )[1];

    provider = "cloudinaryNative";
    url = id;
  } else {
    provider = "cloudinaryFetch";
    url = parsedImage;
  }

  return {
    url,
    provider,
  };
}
</script>

<template>
  <div class="px-4 md:px-8 mb-8">
    <h3 v-if="$slots.title" class="title inline-block mb-4">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h3>

    <ContentList :query="query">
      <template #default="{ list }">
        <ul v-if="firstFeatured">
          <article-card
            :article="list[0]"
            :key="list[0]._path"
            :small="small"
            :featured="true"
          />
        </ul>

        <ul :class="smallOrBigClass">
          <article-card
            v-if="firstFeatured"
            v-for="article in list.slice(1)"
            :article="article"
            :key="article._path"
            :small="small"
            :featured="false"
          />
          <article-card
            v-else
            v-for="article in list.slice(1)"
            :article="article"
            :key="article._path"
            :small="small"
            :featured="false"
          />
        </ul>
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentList>
  </div>
</template>
