<script setup lang="ts">
defineProps(["tag", "title", "simple", "nospace", "small"]);
</script>
<template>
  <div :class="!nospace ? 'px-4 md:px-8 mb-4' : ''">
    <component
      :is="tag"
      :class="
        !simple
          ? `title ${!small ? 'page-title' : ''} inline-block`
          : 'font-black text-3xl mb-4'
      "
      >{{ title }}</component
    >
  </div>
</template>
