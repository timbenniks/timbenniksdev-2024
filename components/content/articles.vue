<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const props = defineProps(["limit", "small"]);

const query: QueryBuilderParams = {
  path: "/articles",
  limit: props.limit || 5,
  sort: [{ date: -1 }],
};
</script>

<template>
  <div class="p-12">
    <h2 v-if="$slots.title" class="text-4xl md:text-5xl mb-2 md:max-w-[500px]">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h2>

    <ContentList :query="query">
      <template #default="{ list }">
        <ul>
          <li v-for="article in list" :key="article._path" class="mb-4">
            <h3 class="font-bold text-xl">{{ article.title }}</h3>
            <p>{{ article.date }}, {{ article.description }}</p>
          </li>
        </ul>
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentList>
  </div>
</template>
