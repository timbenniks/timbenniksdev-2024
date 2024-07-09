<script setup lang="ts">
defineProps(["videoid"]);
</script>

<template>
  <div class="my-8">
    <lite-youtube :videoid="videoid"></lite-youtube>
  </div>
</template>
