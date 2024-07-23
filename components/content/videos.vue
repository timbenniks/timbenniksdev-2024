<script setup lang="ts">
import { getSlotTextContent } from "../../utils";

const props = defineProps([
  "limit",
  "folder",
  "small",
  "extras",
  "firstFeatured",
]);

const slots = useSlots();
const title = slots && slots.title ? getSlotTextContent(slots.title()) : false;
const description =
  slots && slots.description ? getSlotTextContent(slots.description()) : false;

const { data: videosData } = await useAsyncData(
  `videos-limit-${props.limit}-small-${props.small}-folder-${props.folder}`,
  () =>
    queryContent(`/videos/${props.folder}`)
      .sort({ position: 1 })
      .limit(props.limit || false)
      .find()
);
</script>

<template>
  <videosList
    :videos="videosData"
    :small="small"
    :title="title"
    :description="description"
    :extrasUrl="extras ? `/videos/${folder}` : false"
    :firstFeatured="firstFeatured"
  />
</template>
