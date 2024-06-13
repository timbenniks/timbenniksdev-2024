<script setup lang="ts">
const props = defineProps(["smallertitle"]);

const heroclass = computed(() => {
  return props.smallertitle ? "text-4xl md:text-5xl" : "text-4xl md:text-7xl";
});
</script>
<template>
  <div class="md:relative mb-12 z-40">
    <ContentSlot :use="$slots.image" v-if="$slots.image" unwrap="p" />

    <article
      v-if="$slots.title || $slots.description"
      class="md:absolute top-2/4 mdL-translate-y-2/4 left-16 mt-4 md:mt-0 px-4 md:px-0"
    >
      <h1 v-if="$slots.title" class="title inline-block" :class="heroclass">
        <ContentSlot unwrap="p" :use="$slots.title" />
      </h1>
      <h2
        v-if="$slots.description"
        class="bg-black py-1 px-2 text-lg md:text-2xl font-black"
      >
        <ContentSlot unwrap="p" :use="$slots.description" />
      </h2>
    </article>
  </div>
</template>
