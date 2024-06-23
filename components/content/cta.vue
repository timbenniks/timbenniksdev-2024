<script setup lang="ts">
defineProps({
  url: {
    type: String,
  },
  text: {
    type: String,
  },
  target: {
    type: String,
    default: "_self",
  },
});
</script>
<template>
  <NuxtLink class="cta" :to="url" :target="target">{{ text }}</NuxtLink>
</template>
