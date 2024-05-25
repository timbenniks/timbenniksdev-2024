<script setup lang="ts">
defineProps([
  "title",
  "description",
  "image",
  "small",
  "nospace",
  "darkImageUsed",
]);
</script>

<template>
  <div class="p-12">
    <slot />

    <article>
      <h1 v-if="title" class="text-4xl md:text-5xl mb-2 md:max-w-[500px]">
        {{ title }}
      </h1>
      <p v-if="description">
        {{ description }}
      </p>
    </article>
  </div>
</template>
