<script setup lang="ts">
defineProps(["tag", "title", "simple", "nospace", "small"]);
</script>
<template>
  <titleBlock
    :tag="tag"
    :title="title"
    :simple="simple"
    :nospace="nospace"
    :small="small"
  />
</template>
