<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const props = defineProps(["limit", "folder", "small", "extras"]);

const query: QueryBuilderParams = {
  path: `/videos/${props.folder}`,
  sort: [{ position: 1 }],
};

if (props.limit) {
  query.limit = props.limit;
}

const smallOrBigClass = computed(() => {
  return props.small
    ? "grid grid-cols-1 md:grid-cols-1 gap-6"
    : "grid grid-cols-1 md:grid-cols-3 gap-6";
});
</script>

<template>
  <div class="px-4 md:px-8 mb-8">
    <ContentList :query="query">
      <template #default="{ list }">
        <header
          class="mb-2 flex md:space-x-4 space-x-0 md:items-end flex-col md:flex-row items-start"
        >
          <h3 v-if="$slots.title" class="title inline-block">
            <ContentSlot :use="$slots.title" unwrap="p" />
          </h3>
          <p class="uppercase text-sm mt-2" v-if="extras">
            <nuxt-link :to="`/videos/${folder}`">See all →</nuxt-link>
          </p>
        </header>
        <div
          class="mb-12 max-w-screen-lg prose prose-invert"
          v-if="$slots.description"
        >
          <ContentSlot :use="$slots.description" />
        </div>

        <ul :class="smallOrBigClass" class="mt-4">
          <li v-for="video in list" :key="video._path" class="mb-4">
            <NuxtLink
              :to="`https://youtube.com/watch?v=${video.videoId}`"
              target="_blank"
              class="md:flex"
              :class="small ? 'md:flex-row md:space-x-4' : 'flex-col'"
            >
              <NuxtImg
                provider="cloudinary"
                :src="video.image"
                sizes="sm:252px"
                :alt="video._path || ''"
                class="mb-2 fancy-image"
                :class="small ? 'w-full md:w-64' : 'w-full'"
                width="252"
                height="142"
              />
              <div>
                <p class="font-bold text-xl line-clamp-2">
                  {{ video.title }}
                </p>
                <p v-if="small" class="line-clamp-2 text-slate-400 text-sm">
                  {{ video.description }}
                </p>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </template>
      <template #not-found>
        <p>No videos found.</p>
      </template>
    </ContentList>
  </div>
</template>
