<script setup lang="ts">
import { getSlotTextContent } from "../../utils";

const props = defineProps(["limit", "small"]);
const slots = useSlots();
const title = slots && slots.title ? getSlotTextContent(slots.title()) : false;

const { data: talksData } = await useAsyncData(
  `videos-limit-${props.limit}-small-${props.small}-folder-${props.folder}`,
  () =>
    queryContent("/speaking")
      .sort({ date: -1 })
      .where({ _dir: { $ne: "" } }, { _empty: { $ne: true } })
      .limit(props.limit || false)
      .find()
);
</script>

<template>
  <talksList :small="small" :title="title" :talks="talksData" />
</template>
