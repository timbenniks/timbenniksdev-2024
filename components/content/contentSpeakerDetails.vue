<script setup lang="ts">
const config = useAppConfig();
const deets = config.speaker.details;
</script>

<template>
  <SpeakerDetails :deets="deets" />
</template>
