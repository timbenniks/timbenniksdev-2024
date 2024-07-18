<script setup lang="ts">
defineProps(["video", "small", "featured"]);
</script>

<template>
  <li class="relative" :class="featured ? 'mb-12' : 'mb-4'">
    <NuxtLink
      :to="`https://www.youtube.com/watch?v=${video.videoId}`"
      target="_blank"
      class="md:flex"
      :class="small || featured ? 'md:flex-row md:space-x-4' : 'flex-col'"
    >
      <div class="relative aspect-video" :class="{ 'md:w-64': small }">
        <NuxtImg
          provider="cloudinaryFetch"
          :src="video.image"
          :alt="`Poster image for: ${video.title}` || ''"
          class="w-full mb-2"
          :class="{
            'md:w-64': small,
            'w-fullfancy-image-alt': featured,
            'fancy-image': !featured,
          }"
          :sizes="featured ? 'sm:1440px' : 'sm:350px'"
          :width="featured ? 1440 : 350"
          :height="featured ? 810 : 197"
          :loading="featured ? 'eager' : 'lazy'"
          :fetchpriority="featured ? 'high' : 'auto'"
          fit="thumbnail"
        />

        <div id="playButton" v-if="featured" />
        <div
          v-if="featured"
          class="hidden md:block absolute bottom-0 left-0 w-full h-[400px] md:bg-gradient-to-t md:from-[#1b1d39] md:to-[rgba(#1b1d39, 0)]"
        ></div>
      </div>

      <div :class="{ 'max-w-80': small }">
        <p
          class="font-bold"
          :class="
            featured
              ? 'text-2xl md:text-3xl mb-2 mt-4 md:mt-0 md:absolute bottom-4 left-4 block flowing-title'
              : 'text-xl line-clamp-2'
          "
        >
          {{ video.title }}
        </p>

        <p
          v-if="small"
          class="text-slate-400 text-sm"
          :class="{ 'line-clamp-3': small }"
        >
          {{ video.description }}
        </p>
      </div>
    </NuxtLink>
  </li>
</template>

<style>
#playButton {
  width: 68px;
  height: 48px;
  background-repeat: no-repeat;
  background-color: transparent;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/><path d="M45 24 27 14v20" fill="white"/></svg>');
  z-index: 1;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: inherit;
}
</style>
