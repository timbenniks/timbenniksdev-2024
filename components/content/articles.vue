<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const props = defineProps(["limit", "small"]);

const query: QueryBuilderParams = {
  path: `/articles/data`,
  limit: props.limit || 3,
  sort: [{ date: -1 }],
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
          <li v-for="article in list" :key="article._path" class="mb-4">
            <NuxtLink
              :to="article.path"
              target="_blank"
              class="md:flex"
              :class="small ? 'md:flex-row md:space-x-4' : 'flex-col'"
            >
              <NuxtImg
                provider="cloudinary"
                :src="article.image"
                :sizes="small ? 'sm:15vw' : 'sm:33vw'"
                :alt="article.title"
                class="mb-2 fancy-image"
                :class="small ? 'w-full md:w-64' : 'w-full'"
              />
              <div>
                <p class="font-bold text-xl line-clamp-2">
                  {{ article.title }}
                </p>
                <p v-if="small" class="line-clamp-2 text-slate-400 text-sm">
                  {{ article.description }}
                </p>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentList>
  </div>
</template>
