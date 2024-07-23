<script setup>
const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);

const mappedNavigation = computed(() => {
  return navigation.value.map((link) => {
    return {
      url: link._path,
      copy: link.title,
    };
  });
});
</script>

<template>
  <globalHeader :navigation="mappedNavigation" />
</template>
