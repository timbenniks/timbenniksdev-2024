<script setup type="ts">
import { format } from "date-fns";

function parseHeroImage(imageUrl) {
  const decodedUrl = decodeURIComponent(imageUrl)
  return decodedUrl.split("https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/")[1]
}

useHead({
  script: [
  {
      type: "module",
      defer: true,
      src: "/youtube.js",
      tagPosition: "bodyClose",
    },
    {
      type: "module",
      defer: true,
      src: "/questionnaire-cms.js",
      tagPosition: "bodyClose",
    },
  ]
})

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

const { data: post } = await useAsyncData(`content-${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne()
)

useJsonld({
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "BlogPosting",
    "headline": post.value.title,
    "image": parseHeroImage(post.value.image),
    "keywords": post.value.tags.join(", "),
    "mainEntityOfPage": `https://timbenniks.dev/writing/${route.params.slug[0]}`,
    "url": `https://timbenniks.dev/writing/${route.params.slug[0]}`,
    "datePublished": post.value.date,
    "dateCreated": post.value.date,
    "dateModified": post.value.date,
    "description": post.value.description,
    "timeRequired": `PT${post.value.reading_time.split(" min read")[0]}M`,
    "author": {
      "@type": "Person",
      "@id": "https://timbenniks.dev/about#Person",
      "name": "Tim Benniks",
      "url": "https://timbenniks.dev/",
      "image": {
        "@type": "ImageObject",
        "@id": "https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto,w_96,h_96,c_thumb/Tim/tim_aug_2023.png",
        "url": "https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto,w_96,h_96,c_thumb/Tim/tim_aug_2023.png",
        "width": "96",
        "height": "96"
      }
    },
  }]
});

const { data: relatedPosts } = await useAsyncData(`related-${route.path}`, async () => {
  if (!post.value || !post.value.tags) return []

  const relatedQuery = queryContent()
    .where({
      _path: { $ne: route.path },
      tags: { $in: post.value.tags }
    })
    .limit(3)
    .find()

  return relatedQuery
})
</script>

<template>
  <div class="p-8">
    <ContentDoc v-slot="{ doc }">
      <Head>
        <Meta name="keywords" :content="doc.tags.join(', ')" />
      </Head>

      <Head v-if="doc.canonical_url">
        <Link rel="canonical" :href="doc.canonical_url" />
      </Head>

      <div class="max-w-screen-lg mx-auto">
        <header class="mb-4">
          <p class="mb-12">
            <nuxt-link
              to="/writing"
              class="flex items-center space-x-4 uppercase !no-underline"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M15.8332 10.0003H4.1665M4.1665 10.0003L9.99984 15.8337M4.1665 10.0003L9.99984 4.16699"
                  stroke="CurrentColor"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              All posts
            </nuxt-link>
          </p>
          <h1 class="font-bold mb-4 text-3xl md:text-5xl !leading-tight">
            {{ doc.title }}
          </h1>

          <p class="text-sm mb-2">
            Published on
            <time :datetime="format(new Date(doc.date), 'MMM dd, yyyy')">{{
              format(new Date(doc.date), "MMM dd, yyyy")
            }}</time>
          </p>

          <ul class="flex space-x-2">
            <li v-for="tag in doc.tags" :key="tag" class="tag">{{ tag }}</li>
          </ul>
        </header>

        <section class="flex gap-12 flex-col lg:flex-row mb-4">
          <article
            class="prose prose-invert lg:prose-lg prose-headings:font-bold"
          >
            <ContentRenderer :value="doc" />

            <p
              class="text-xs mt-4 mb-12 text-slate-300"
              v-if="
                doc.canonical_url &&
                !doc.canonical_url.includes('timbenniks.dev')
              "
            >
              Originally published at:
              <a
                class="text-slate-300"
                :href="doc.canonical_url"
                target="_blank"
                >{{ doc.canonical_url }}</a
              >
            </p>

            <faq v-if="doc.faqs" :faqs="doc.faqs" />
          </article>
          <aside>
            <div class="sticky top-24">
              <p class="text-xs text-slate-400 mb-2 uppercase mt-8">
                Written by
              </p>
              <div class="flex items-center gap-2">
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto,w_96,h_96,c_thumb/Tim/tim_aug_2023.png"
                  alt="Tim Benniks"
                  width="48"
                  height="48"
                  class="w-12 h-12 rounded-full"
                />
                Tim Benniks
              </div>
              <NuxtImg
                provider="cloudinaryFetch"
                :src="parseHeroImage(doc.image)"
                :alt="doc.title"
                width="1920"
                height="1080"
                fit="cover"
                loading="eager"
                sizes="sm:30vw"
                fetchpriority="high"
                class="my-8 fancy-image-alt"
              />

              <p class="font-bold text-[#db97bf] mb-2">
                {{ doc.reading_time }}
              </p>

              <ul v-if="doc.body.toc" class="bg-[#0e1029] p-8 pb-2">
                <li
                  v-for="item in doc.body.toc.links"
                  :key="item.id"
                  class="mb-6"
                >
                  <a
                    class="hover:underline text-slate-200"
                    :href="`#${item.id}`"
                    >{{ item.text }}</a
                  >
                </li>
              </ul>
            </div>
          </aside>
        </section>

        <ArticlesNoQuery
          :articles="relatedPosts"
          :small="false"
          v-if="relatedPosts.length > 0"
        >
          <template #title> related articles </template>
        </ArticlesNoQuery>

        <!-- <articles
          :articles="relatedPosts"
          :small="false"
          title="related articles"
        /> -->
      </div>
    </ContentDoc>
  </div>
</template>
