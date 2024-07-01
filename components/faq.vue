<script setup lang="ts">
defineProps(["faqs"]);
</script>

<template>
  <div class="my-4" itemscope itemtype="https://schema.org/FAQPage">
    <h4 class="title inline-block small mb-4">Frequently asked questions</h4>
    <ul class="bg-[#0e1029] pt-4 pb-1 px-4">
      <li
        v-for="faq in faqs"
        :key="faq.question"
        itemscope
        itemprop="mainEntity"
        itemtype="https://schema.org/Question"
      >
        <details class="mb-4">
          <summary
            class="bg-[#1b1d39] hover:opacity-90 py-2 px-4 roundex-lg cursor-pointer font-bold"
            itemprop="name"
          >
            {{ faq.question }}
          </summary>

          <div
            itemscope
            itemprop="acceptedAnswer"
            itemtype="https://schema.org/Answer"
            class="text-sm my-4 px-4 text-slate-400"
          >
            <p itemprop="text">{{ faq.answer }}</p>
          </div>
        </details>
      </li>
    </ul>
  </div>
</template>
