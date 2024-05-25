<script setup lang="ts">
defineProps(["small", "nospace", "darkimage"]);
const slots = useSlots();
</script>

<template>
  <div class="p-12">
    <slot name="image" v-if="slots.image" />

    <article>
      <h1 v-if="slots.title" class="text-4xl md:text-5xl mb-2 md:max-w-[500px]">
        <slot name="title" />
      </h1>
      <p v-if="slots.description">
        <slot name="description" />
      </p>

      <p>small: {{ small }}</p>
      <p>nospace: {{ nospace }}</p>
      <p>darkimage: {{ darkimage }}</p>
    </article>
  </div>
</template>
