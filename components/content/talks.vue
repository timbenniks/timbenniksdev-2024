<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const props = defineProps(["limit", "small"]);

const query: QueryBuilderParams = {
  path: "/talks",
  limit: props.limit || 5,
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
          <li v-for="talk in list" :key="talk._path" class="mb-4">
            <h3 class="font-bold text-xl">{{ talk.talk }}</h3>
            <p>{{ talk.date }}, {{ talk.conference }}</p>
          </li>
        </ul>
      </template>
      <template #not-found>
        <p>No talks found.</p>
      </template>
    </ContentList>
  </div>
</template>
