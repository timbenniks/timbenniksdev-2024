<script setup lang="ts">
const config = useAppConfig();
const timelineItems = config.timeline.items;
</script>

<template>
  <timeline :timelineItems="timelineItems" />
</template>
