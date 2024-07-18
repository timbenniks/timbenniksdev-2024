<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content";

const props = defineProps([
  "limit",
  "folder",
  "small",
  "extras",
  "firstFeatured",
]);

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
        <ul v-if="firstFeatured">
          <VideoCard
            :video="list[0]"
            :featured="true"
            :key="list[0] && list[0]._path"
            class="mb-4"
          />
        </ul>

        <header
          class="mb-2 flex md:space-x-4 space-x-0 md:items-end flex-col md:flex-row items-start"
        >
          <h2 v-if="$slots.title" class="title inline-block">
            <ContentSlot :use="$slots.title" unwrap="p" />
          </h2>
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
          <VideoCard
            v-if="firstFeatured"
            v-for="video in list.slice(1)"
            :key="video._path"
            class="mb-4"
            :featured="false"
            :video="video"
            :small="small"
          />

          <VideoCard
            v-else
            v-for="video in list"
            :key="video.id"
            class="mb-4"
            :featured="false"
            :video="video"
            :small="small"
          />
        </ul>
      </template>
      <template #not-found>
        <p>No videos found.</p>
      </template>
    </ContentList>
  </div>
</template>
