<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
import { format, getYear, getDay } from "date-fns";

const props = defineProps(["limit", "small"]);

const query: QueryBuilderParams = {
  path: "/talks/data",
  limit: props.limit || 3,
  sort: [{ date: -1 }],
};

const smallOrBigClass = computed(() => {
  return props.small
    ? "grid grid-cols-1 md:grid-cols-1 gap-6"
    : "grid grid-cols-1 md:grid-cols-3 gap-6";
});

function parseDate(date: string) {
  const d = date ? new Date(date) : false;

  return {
    year: date ? getYear(date) : "",
    month: d ? format(d, "MMM") : "",
    day: date ? getDay(date) : "",
  };
}
</script>

<template>
  <div class="px-8 mb-8">
    <h3 v-if="$slots.title" class="title inline-block mb-4">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h3>

    <ContentList :query="query">
      <template #default="{ list }">
        <ul :class="smallOrBigClass">
          <li v-for="talk in list" :key="talk._path" class="mb-4">
            <NuxtLink
              :to="talk.link"
              target="_blank"
              class="flex"
              :class="small ? 'flex-row space-x-4' : 'flex-col'"
            >
              <p>{{ parseDate(talk.date) }}</p>
              <div>
                <p class="font-bold text-xl mb-2">{{ talk.talk }}</p>
                <p class="line-clamp-2">{{ talk.conference }}</p>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </template>
      <template #not-found>
        <p>No talks found.</p>
      </template>
    </ContentList>
  </div>
</template>
