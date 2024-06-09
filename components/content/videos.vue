<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const props = defineProps(["limit", "folder", "small"]);

const query: QueryBuilderParams = {
  path: `/videos/${props.folder}`,
  limit: props.limit || 3,
  sort: [{ position: 1 }],
};

const smallOrBigClass = computed(() => {
  return props.small
    ? "grid grid-cols-1 md:grid-cols-1 gap-6"
    : "grid grid-cols-1 md:grid-cols-3 gap-6";
});
</script>

<template>
  <div class="px-4 md:px-8 mb-8">
    <h3 v-if="$slots.title" class="title inline-block mb-4">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h3>

    <ContentList :query="query">
      <template #default="{ list }">
        <ul :class="smallOrBigClass">
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
                :sizes="small ? 'sm:15vw' : 'sm:33vw'"
                :alt="video.title || ''"
                class="mb-2 fancy-image"
                :class="small ? 'w-full md:w-64' : 'w-full'"
                width="160"
                height="90"
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
