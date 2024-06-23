<script setup lang="ts">
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
});

const heroclass = computed(() => {
  return props.smallertitle ? "text-3xl md:text-5xl" : "text-3xl md:text-7xl";
});
</script>
<template>
  <div class="md:relative mb-12 z-40">
    <ContentSlot :use="$slots.image" v-if="$slots.image" unwrap="p" />

    <article
      v-if="$slots.title || $slots.description"
      class="md:absolute top-2/4 md:-translate-y-2/4 left-16 mt-4 md:mt-0 px-4 md:px-0"
    >
      <component
        :is="titletag"
        v-if="$slots.title"
        class="title inline-block"
        :class="heroclass"
      >
        <ContentSlot unwrap="p" :use="$slots.title" />
      </component>
      <component
        :is="subtitletag"
        v-if="$slots.description"
        class="bg-black py-1 px-2 text-lg md:text-2xl font-black"
      >
        <ContentSlot unwrap="p" :use="$slots.description" />
      </component>
      <div class="mt-4 flex space-x-4" v-if="$slots.ctas">
        <ContentSlot unwrap="p" :use="$slots.ctas" />
      </div>
    </article>
  </div>
</template>
