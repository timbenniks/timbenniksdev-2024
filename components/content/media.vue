<template>
  <div class="px-4 md:px-8 mb-8">
    <figure v-if="$slots.media">
      <ContentSlot :use="$slots.media" />
      <figcaption v-if="$slots.caption" class="mt-2">
        <ContentSlot :use="$slots.caption" unwrap="p" />
      </figcaption>
    </figure>
  </div>
</template>
