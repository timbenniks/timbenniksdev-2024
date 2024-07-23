<script setup lang="ts">
import { getSlotTextContent } from "../../utils";

const props = defineProps({
  smallertitle: {
    type: Boolean,
  },
  titletag: {
    type: String,
    default: "h1",
  },
  subtitletag: {
    type: String,
    default: "h2",
  },
  right: {
    type: Boolean,
    default: false,
  },
});

const slots = useSlots();
const title = slots && slots.title ? getSlotTextContent(slots.title()) : false;
const description =
  slots && slots.description ? getSlotTextContent(slots.description()) : false;
</script>
<template>
  <Hero
    :smallertitle="smallertitle"
    :titletag="titletag"
    :subtitletag="subtitletag"
    :right="right"
    :title="title"
    :description="description"
  >
    <template #image>
      <ContentSlot :use="$slots.image" v-if="$slots.image" unwrap="p" />
    </template>

    <template #ctas>
      <ContentSlot unwrap="p" :use="$slots.ctas" />
    </template>
  </Hero>
</template>
