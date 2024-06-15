<script setup lang="ts">
useHead({
  meta: [
    {
      "http-equiv": "accept-ch",
      content: "dpr, viewport-width, width",
    },
    {
      name: "theme-color",
      content: "#A2C0F3",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
});
</script>
<template>
  <main class="mx-auto max-w-[1400px] bg-[#1b1d39] pb-12">
    <globalHeader />
    <NuxtPage />
  </main>
</template>

<style lang="postcss">
:root {
  font-family: Lato;
}
</style>
