<script setup lang="ts">
const props = defineProps(["articles", "small"]);

const smallOrBigClass = computed(() => {
  return props.small
    ? "grid grid-cols-1 md:grid-cols-1 gap-6"
    : "grid grid-cols-1 md:grid-cols-3 gap-6";
});

function parseImage(imageUrl: string) {
  const decodedUrl = decodeURIComponent(imageUrl);

  const parsedImage = decodedUrl.split(
    "https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/"
  )[1];

  let url = "";
  let provider = "";

  if (parsedImage.includes("cloudinary")) {
    const id = parsedImage.split(
      "https://res.cloudinary.com/dwfcofnrd/image/upload/"
    )[1];

    provider = "cloudinaryNative";
    url = id;
  } else {
    provider = "cloudinaryFetch";
    url = parsedImage;
  }

  return {
    url,
    provider,
  };
}
</script>

<template>
  <div class="my-12">
    <h3 v-if="$slots.title" class="title inline-block mb-4">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h3>

    <ul :class="smallOrBigClass">
      <li v-for="article in articles" :key="article._path" class="mb-4">
        <NuxtLink
          :to="article._path"
          class="md:flex"
          :class="small ? 'md:flex-row md:space-x-4' : 'flex-col'"
        >
          <NuxtImg
            :provider="parseImage(article.image).provider"
            :src="parseImage(article.image).url"
            :alt="article._path || ''"
            class="mb-2 fancy-image"
            :class="small ? 'w-full md:w-64' : 'w-full'"
            sizes="sm:350px"
            width="350"
            height="197"
            loading="lazy"
            fit="thumbnail"
          />

          <div>
            <p class="font-bold text-xl line-clamp-2">
              {{ article.title }}
            </p>
            <p v-if="small" class="line-clamp-2 text-slate-400 text-sm">
              {{ article.description }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
