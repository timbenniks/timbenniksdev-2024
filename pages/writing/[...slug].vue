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
      <Head v-if="doc.canonical_url">
        <Link rel="canonical" :href="doc.canonical_url" />
      </Head>
      <article class="max-w-screen-lg mx-auto">
        <h1 class="font-bold mb-4 text-3xl md:text-5xl !leading-tight">
          {{ doc.title }}
        </h1>

        <div class="flex flex-col md:flex-row md:space-x-4 md:items-center">
          <p class="text-sm mb-2 md:mb-0">
            {{ format(new Date(doc.date), "MMM dd, yyyy") }}
          </p>
          <ul class="flex space-x-2">
            <li v-for="tag in doc.tags" :key="tag" class="tag">{{ tag }}</li>
          </ul>
        </div>
        <p class="text-xs mt-2 text-slate-300" v-if="doc.canonical_url">
          Canonical URL:
          <a class="text-slate-300" :href="doc.canonical_url" target="_blank">{{
            doc.canonical_url
          }}</a>
        </p>

        <NuxtImg
          provider="cloudinaryFetch"
          :src="parseHeroImage(doc.image)"
          :alt="doc.title"
          width="1440"
          height="710"
          fit="cover"
          loading="eager"
          sizes="sm:100vw"
          fetchpriority="high"
          class="mt-8 fancy-image-alt"
        />
        <div
          class="mt-8 prose prose-invert prose-xl prose-headings:font-bold max-w-screen-lg"
        >
          <ContentRenderer :value="doc" />
        </div>
      </article>
    </ContentDoc>
  </div>
</template>
