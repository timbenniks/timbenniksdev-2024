<script setup lang="ts">
const slots = useSlots();
</script>

<template>
  <div class="relative">
    <slot name="image" v-if="slots.image" />

    <article class="absolute top-2/4 -translate-y-2/4 left-16">
      <h1 v-if="slots.title" class="title inline-block">
        <slot name="title" />
      </h1>
      <h2
        v-if="slots.description"
        class="bg-black py-1 px-2 text-xl font-black"
      >
        <slot name="description" />
      </h2>
    </article>
  </div>
</template>
