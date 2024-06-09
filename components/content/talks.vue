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

function d(date: string) {
  return {
    year: getYear(date),
    month: format(new Date(date), "MMM"),
    day: format(new Date(date), "dd"),
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
        <ul :class="smallOrBigClass">
          <li v-for="talk in list" :key="talk._path" class="mb-2">
            <NuxtLink
              :to="talk.link"
              target="_blank"
              class="flex"
              :class="small ? 'flex-row space-x-4' : 'flex-col'"
            >
              <div
                class="bg-[#0e1029] w-20 h-28 text-center font-black uppercase flex flex-col justify-center date-card"
              >
                <p class="text-4xl">{{ d(talk.date).day }}</p>
                <p class="text-lg">{{ d(talk.date).month }}</p>
                <p class="text-lg">{{ d(talk.date).year }}</p>
              </div>
              <div class="flex flex-col justify-start">
                <p class="font-bold text-xl">{{ talk.conference }}</p>
                <p class="line-clamp-1">
                  {{ talk.talk }}
                </p>
                <p class="text-sm text-slate-400">{{ talk.location }}</p>
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

<style lang="postcss">
.date-card {
  @apply border-2;
  border-image-slice: 1;
  border-image-source: linear-gradient(89.87deg, #256ad1 7.57%, #d1258c 95.58%);
}
</style>
