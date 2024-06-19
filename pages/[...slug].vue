<script setup>
const route = useRoute();
const path = route.path;

const title = computed(() => {
  let title = "";

  if (path === "/") {
    title = "home";
  } else {
    title = route.path.replace("/", "");
  }

  return title;
});

const listItemElements = [
  {
    "@type": "ListItem",
    position: 1,
    name: "home",
    item: "https://timbenniks.dev/",
  },
];

if (path !== "/") {
  listItemElements.push({
    "@type": "ListItem",
    position: 2,
    name: title.value,
    item: `https://timbenniks.dev${route.path}`,
  });
}

useJsonld({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://timbenniks.dev/#breadcrumb",
      itemListElement: listItemElements,
    },
  ],
});
</script>

<template>
  <ContentDoc />
</template>
