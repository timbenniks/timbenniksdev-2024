<script setup lang="ts">
const route = useRoute();
const folder = route.params.slug;

const title = computed(() => {
  let result = "";

  switch (folder[0]) {
    case "tim":
      result = "Personal videos";
      break;

    case "live-hygraph":
      result = "Hygraph live streams";
      break;

    case "hygraph":
      result = "Hygraph videos";
      break;

    case "live-uniform":
      result = "Uniform live streams";
      break;

    case "misc-streams":
      result = "Personal live streams";
      break;

    case "mp":
      result = "Middleware Productions";
      break;

    case "uniform":
      result = "Uniform Videos";
      break;
  }

  return result;
});
</script>

<template>
  <title-block tag="h1" :title="title" />
  <videos :small="false" :folder="folder" :extras="false" />
</template>
