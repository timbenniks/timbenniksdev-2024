<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const props = defineProps(["limit", "small"]);

const query: QueryBuilderParams = {
  path: `/writing`,
  sort: [{ date: -1 }],
  where: [{ _dir: { $ne: "" } }, { _empty: { $ne: true } }],
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
    <h3 v-if="$slots.title" class="title inline-block mb-4">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h3>

    <ContentList :query="query">
      <template #default="{ list }">
        <pre v-for="article in list" :key="article._path">{{
          article._path
        }}</pre>

        <ul :class="smallOrBigClass">
          <li v-for="article in list" :key="article._path" class="mb-4">
            <NuxtLink
              :to="article._path"
              class="md:flex"
              :class="small ? 'md:flex-row md:space-x-4' : 'flex-col'"
            >
              <NuxtImg
                provider="cloudinary"
                :src="article.image"
                sizes="sm:564px"
                :alt="article._path || ''"
                class="mb-2 fancy-image"
                :class="small ? 'w-full md:w-64' : 'w-full'"
                width="564"
                height="318"
                fit="cover"
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
