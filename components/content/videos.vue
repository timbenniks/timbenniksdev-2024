<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const props = defineProps(["limit", "folder"]);

const query: QueryBuilderParams = {
  path: `/videos/${props.folder}`,
  limit: props.limit || 3,
  sort: [{ date: -1 }],
};

const slots = useSlots();
</script>

<template>
  <div class="p-12">
    <h2 v-if="slots.title" class="text-4xl md:text-5xl mb-2 md:max-w-[500px]">
      <slot name="title" />
    </h2>

    <ContentList :query="query">
      <template #default="{ list }">
        <ul>
          <li v-for="video in list" :key="video._path" class="mb-4">
            <h3 class="font-bold text-xl">{{ video.title }}</h3>
          </li>
        </ul>
      </template>
      <template #not-found>
        <p>No videos found.</p>
      </template>
    </ContentList>
  </div>
</template>
