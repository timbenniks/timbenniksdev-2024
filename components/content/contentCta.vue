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
<template><cta :url="url" :text="text" :target="target" /></template>
