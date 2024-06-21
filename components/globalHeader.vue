<script setup lang="ts"></script>
<template>
  <header
    class="px-8 py-4 flex justify-between items-center sticky top-0 z-50 bg-[#1b1d39] lg:bg-opacity-80 h-[91px]"
  >
    <NuxtLink to="/" class="home-button" title="Homepage" aria-label="Homepage">
      <tim class="w-[43px] h-[61px]" />
    </NuxtLink>

    <button
      class="nav-toggle z-[60] absolute top-8 right-8 w-8 h-8 lg:hidden transform transition duration-500 ease-in-out"
    >
      <span class="sr-only">Open main menu</span>
      <div class="block w-8 h-8">
        <span
          class="line-1 bg-white translate-y-0 absolute block h-1 w-8 transform bg-primary transition duration-500 ease-in-out"
        ></span>
        <span
          class="line-2 bg-white translate-y-3 absolute block h-1 w-8 transform bg-primary transition duration-500 ease-in-out"
        ></span>
        <span
          class="line-3 bg-white translate-y-6 absolute block h-1 w-8 transform bg-primary transition duration-500 ease-in-out"
        ></span>
      </div>
    </button>

    <nav
      id="nav"
      class="absolute top-[93px] left-0 w-full z-50 lg:static bg-[#1b1d39] lg:bg-transparent"
    >
      <ContentNavigation v-slot="{ navigation }">
        <ul
          class="flex space-x-0 lg:space-x-8 justify-end items-center lg:items-baseline flex-col lg:flex-row"
        >
          <li
            v-for="link of navigation"
            :key="link._path"
            class="font-bold uppercase mb-4 lg:mb-0"
          >
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          </li>
        </ul>
      </ContentNavigation>
    </nav>
  </header>
</template>

<style lang="postcss" scoped>
.nav-toggle.open {
  transform: translateY(13px);
}
.nav-toggle.open .line-1 {
  transform: rotate(45deg) translateY(0px);
}

.nav-toggle.open .line-2 {
  opacity: 0;
}

.nav-toggle.open .line-3 {
  transform: rotate(-45deg) translateY(0px);
}

#nav {
  @apply hidden lg:block;
}

#nav.open {
  @apply block;
}
</style>
