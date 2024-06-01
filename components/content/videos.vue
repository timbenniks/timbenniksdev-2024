<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const props = defineProps(["limit", "folder", "small"]);

const query: QueryBuilderParams = {
  path: `/videos/${props.folder}`,
  limit: props.limit || 3,
  sort: [{ date: -1 }],
};

const slots = useSlots();
</script>

<template>
  <div class="px-12 xl:px-0 mb-8">
    <h3 v-if="slots.title" class="title inline-block mb-4">
      <slot name="title" />
    </h3>

    <ContentList :query="query">
      <template #default="{ list }">
        <ul class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <li v-for="video in list" :key="video._path" class="mb-4">
            <NuxtLink
              :to="`https://youtube.com/watch?v=${video.videoId}`"
              target="_blank"
            >
              <NuxtImg
                :src="video.image"
                sizes="sm:33vw"
                :alt="video.title"
                class="mb-2"
              />
              <p class="font-bold">{{ video.title }}</p>
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
