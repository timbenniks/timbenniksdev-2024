<template>
  <header
    class="px-8 py-4 flex justify-between items-center sticky top-0 z-50 bg-[#1b1d39] bg-opacity-80"
  >
    <NuxtLink to="/"><tim /></NuxtLink>
    <nav>
      <ContentNavigation v-slot="{ navigation }">
        <ul class="flex space-x-8 justify-end">
          <li
            v-for="link of navigation"
            :key="link._path"
            class="font-bold uppercase"
          >
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          </li>
        </ul>
      </ContentNavigation>
    </nav>
  </header>
</template>
