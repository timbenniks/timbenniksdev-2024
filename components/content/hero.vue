<template>
  <div class="relative mb-12 z-40">
    <ContentSlot :use="$slots.image" v-if="$slots.image" unwrap="p" />

    <article class="absolute top-2/4 -translate-y-2/4 left-16">
      <h1 v-if="$slots.title" class="title hero-title inline-block">
        <ContentSlot unwrap="p" :use="$slots.title" />
      </h1>
      <h2
        v-if="$slots.description"
        class="bg-black py-1 px-2 text-2xl font-black"
      >
        <ContentSlot unwrap="p" :use="$slots.description" />
      </h2>
    </article>
  </div>
</template>
