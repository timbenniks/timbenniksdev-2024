<script setup type="ts">
import { format } from "date-fns";

function parseHeroImage(imageUrl) {
  const decodedUrl = decodeURIComponent(imageUrl)
  return decodedUrl.split("https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/")[1]
}
</script>

<template>
  <div class="pb-12">
    <ContentDoc v-slot="{ doc }">
      <hero>
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
          />
        </template>
      </hero>

      <article class="prose prose-invert prose-xl max-w-screen-lg mx-auto">
        <h1 class="font-black mb-4">{{ doc.title }}</h1>
        <p class="text-sm">
          {{ format(new Date(doc.date), "MMM dd, yyyy") }},
          <a :href="doc.canonical_url" target="_blank">{{
            doc.canonical_url
          }}</a>
        </p>

        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </div>
</template>
