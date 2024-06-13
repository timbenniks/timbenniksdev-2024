<script setup lang="ts">
defineProps(["tag", "title"]);
</script>
<template>
  <div class="px-4 md:px-8 mb-4">
    <component :is="tag" class="title inline-block">{{ title }}</component>
  </div>
</template>
