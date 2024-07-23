<script setup lang="ts">
import { getSlotTextContent } from "../../utils";
const props = defineProps(["media"]);
const slots = useSlots();
const description =
  slots && slots.description ? getSlotTextContent(slots.description()) : false;
</script>

<template>
  <SpeakerMedia :media="media" :description="description" />
</template>
