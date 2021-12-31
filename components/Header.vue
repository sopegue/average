<template>
  <div class="z-50 w-full border-b">
    <nav class="flex items-center px-6 py-3 justify-between">
      <div>
        <nuxt-link v-if="!$route.path.includes('/eng')" to="/">
          <span class="font-bold text-xl indie hidden sm:block">
            POURQUOI MA MOYENNE ?</span
          >
          <span
            class="font-bold text-xl indie block sm:hidden"
            title="Pourquoi ma moyenne ?"
          >
            PMM ?</span
          >
        </nuxt-link>
        <nuxt-link v-else to="/eng">
          <span class="font-bold text-xl indie hidden sm:block">
            WHY MY AVERAGE ?</span
          >
          <span
            class="font-bold text-xl indie block sm:hidden"
            title="Why my average ?"
          >
            WMA ?</span
          >
        </nuxt-link>
      </div>
      <div class="flex items-center space-x-6">
        <nuxt-link
          v-if="!$route.path.includes('/eng')"
          class="flex items-center space-x-2 cursor-pointer"
          :to="$route.path.includes('apropos') ? '/eng/about' : '/eng'"
          title="English"
        >
          <img class="rounded-full w-5 h-5" src="/assets/svg/icon-uk.svg" />
          <span class="text-xs">En</span>
        </nuxt-link>
        <nuxt-link
          v-else
          class="flex items-center space-x-2 cursor-pointer"
          :to="$route.path.includes('about') ? '/apropos' : '/'"
          title="Français"
        >
          <img class="rounded-full w-5 h-5" src="/assets/svg/icon-fr.svg" />
          <span class="text-xs">Fr</span>
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
