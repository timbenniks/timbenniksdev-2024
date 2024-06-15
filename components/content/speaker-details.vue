<script setup lang="ts">
const deets = [
  { label: "Name", val: "Tim Benniks" },
  {
    label: "Company",
    val: "Hygraph",
    link: "https://hygraph.com",
  },
  {
    label: "Title",
    val: "Developer Relations Lead for outreach and awareness",
  },
  { label: "Location", val: "Greater Toulouse Area, France" },
  { label: "E-mail", val: "timbenniks.dev@gmail.com" },
  {
    label: "Website",
    val: "https://timbenniks.dev",
    link: "https://timbenniks.dev",
  },
];
</script>

<template>
  <div class="p-4 md:p-8 mb-8">
    <h3 class="title page-title inline-block mb-6">Speaker details</h3>
    <div class="bg-[#0e1029] p-4 md:p-8">
      <ul class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <li v-for="dd in deets" :key="dd.label">
          <dl>
            <dt class="text-xl font-black text-pink-500 mb-2">
              {{ dd.label }}
            </dt>
            <dd class="text-xl" v-if="dd.link">
              <a :href="dd.link" target="_blank" rel="noopener">{{ dd.val }}</a>
            </dd>
            <dd class="text-xl" v-else>{{ dd.val }}</dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>
