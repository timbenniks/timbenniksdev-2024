<script setup lang="ts">
defineProps({
  alt: {
    type: String,
    default: "",
  },
  src: {
    type: String,
  },
  fit: {
    type: String,
    default: "",
  },
  height: {
    type: Number,
    default: "",
  },
  width: {
    type: Number,
    default: "",
  },
  provider: {
    type: String,
    default: "cloudinaryNative",
  },
  sizes: {
    type: String,
    default: "sm:100vw",
  },
  fetchpriority: {
    type: String,
    default: "normal",
  },
  loading: {
    type: String,
    default: "auto",
  },
  caption: {
    type: String,
  },
});
</script>

<template>
  <Media
    :src="src"
    :width="width"
    :height="height"
    :alt="alt"
    :fit="fit"
    :loading="loading"
    :provider="provider"
    :sizes="sizes"
    :caption="caption"
  />
</template>
