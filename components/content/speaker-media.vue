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
