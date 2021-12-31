<template>
  <div class="px-5 border-t py-3">
    <div class="flex flex-col space-y-2 items-center justify-center">
      <span class="col-white font-semibold text-xs">© {{ toyear }}</span>
      <a
        v-if="!$route.path.includes('/eng')"
        href="/apropos"
        class="hover:underline"
      >
        <span class="col-white font-semibold indie text-sm">
          A propos de PMM</span
        >
      </a>
      <a v-else href="/eng/about" class="hover:underline">
        <span class="col-white font-semibold indie text-sm"> About WMA</span>
      </a>
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
