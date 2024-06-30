<script setup lang="ts">
const props = defineProps(["articles", "small"]);

const smallOrBigClass = computed(() => {
  return props.small
    ? "grid grid-cols-1 md:grid-cols-1 gap-6"
    : "grid grid-cols-1 md:grid-cols-3 gap-6";
});
</script>

<template>
  <div class="my-12">
    <h3 v-if="$slots.title" class="title inline-block mb-4">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h3>

    <ul :class="smallOrBigClass">
      <article-card
        v-for="article in articles"
        :article="article"
        :key="article._path"
        :small="small"
      />
    </ul>
  </div>
</template>
