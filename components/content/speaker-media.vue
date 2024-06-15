<template>
  <div class="p-4 md:p-8 mb-8">
    <h3 class="title page-title inline-block mb-4">Speaker media</h3>
    <ContentSlot :use="$slots.descripiton" v-if="$slots.descripiton" />

    <figure class="media-grid my-12">
      <div class="media-1">
        <ContentSlot :use="$slots.image1" v-if="$slots.image1" unwrap="p" />
      </div>
      <div class="media-2">
        <ContentSlot :use="$slots.image2" v-if="$slots.image2" unwrap="p" />
      </div>
      <div class="media-3">
        <ContentSlot :use="$slots.image3" v-if="$slots.image3" unwrap="p" />
      </div>
    </figure>
  </div>
</template>

<style lang="postcss">
.media-grid {
  @apply grid gap-8 grid-cols-1 md:grid-cols-[0.472fr_0.6fr] md:grid-rows-[1fr_1fr];
}

.media-1 {
  @media (min-width: 768px) {
    grid-area: 1/1/3/2;
  }
}

.media-2 {
  @media (min-width: 768px) {
    grid-area: 1/2/2/3;
  }
}

.media-3 {
  @media (min-width: 768px) {
    grid-area: 2/2/3/3;
  }
}
</style>
