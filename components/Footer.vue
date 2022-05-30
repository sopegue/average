<template>
  <div class="px-5 border-t py-3">
    <div class="flex flex-col space-y-2 items-center justify-center">
      <span class="col-white font-semibold text-xs">© {{ toyear }}, Xunita</span>
      <nuxt-link
        v-if="!$route.path.includes('/eng')"
        to="/apropos"
        class="hover:underline"
        ><span class="col-white font-semibold indie text-sm">
          A propos de PMM</span
        ></nuxt-link
      >
      <nuxt-link v-else to="/eng/about" class="hover:underline">
        <span class="col-white font-semibold indie text-sm">
          About WMA</span
        ></nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    toyear() {
      return new Date().getFullYear().toString()
    },
  },
}
</script>

<style scoped></style>
