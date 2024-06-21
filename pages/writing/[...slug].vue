<script setup type="ts">
import { format } from "date-fns";

function parseHeroImage(imageUrl) {
  const decodedUrl = decodeURIComponent(imageUrl)
  return decodedUrl.split("https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/")[1]
}

const route = useRoute();

const listItemElements = [
  {
    "@type": "ListItem",
    position: 1,
    name: "home",
    item: "https://timbenniks.dev/",
  },
  {
    "@type": "ListItem",
    position: 2,
    name: "writing",
    item: `https://timbenniks.dev/writing`,
  },
  {
    "@type": "ListItem",
    position: 3,
    name: route.params.slug[0].replaceAll("-", " "),
    item: `https://timbenniks.dev/writing/${route.params.slug[0]}`,
  },
];

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
  <div class="p-8 md:p-0 md:pb-12">
    <ContentDoc v-slot="{ doc }">
      <hero class="hidden md:block">
        <template v-slot:image>
          <NuxtImg
            provider="cloudinary"
            :src="parseHeroImage(doc.image)"
            :alt="doc.title"
            width="1440"
            height="230"
            fit="crop"
            loading="eager"
            sizes="sm:100vw"
            fetchpriority="high"
          />
        </template>
      </hero>

      <article
        class="prose prose-invert prose-xl max-w-screen-lg mx-auto prose-headings:font-bold"
      >
        <h1 class="font-bold mb-4">{{ doc.title }}</h1>
        <p class="text-sm">
          {{ format(new Date(doc.date), "MMM dd, yyyy") }} at
          <a :href="doc.canonical_url" target="_blank">{{
            doc.canonical_url
          }}</a>
        </p>

        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </div>
</template>
