<script setup lang="ts">
defineProps(["tag", "title", "simple"]);
</script>
<template>
  <div class="px-4 md:px-8 mb-4">
    <component
      :is="tag"
      :class="
        !simple ? 'title page-title inline-block' : 'font-black text-3xl mb-4'
      "
      >{{ title }}</component
    >
  </div>
</template>
