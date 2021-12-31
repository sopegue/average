<template>
  <div class="z-50 w-full border-b">
    <nav class="flex items-center px-6 py-3 justify-between">
      <div>
        <a href="/">
          <span class="font-bold text-xl indie hidden sm:block">
            POURQUOI MA MOYENNE ?</span
          >
          <span
            class="font-bold text-xl indie block sm:hidden"
            title="Pourquoi ma moyenne ?"
          >
            PMM ?</span
          >
        </a>
      </div>
      <!-- <div class="flex items-center space-x-6">
        <div v-for="(lan, i) in lang" :key="i">
          <a
            class="flex items-center space-x-2 cursor-pointer"
            href="/"
            :title="lan.title"
          >
            <img class="rounded-full w-5 h-5" :src="lan.image" />
            <span class="text-xs">{{ lan.name }}</span>
          </a>
        </div>
      </div> -->
    </nav>
  </div>
</template>

<script>
import { lang } from '@/lang/lang'
export default {
  data() {
    return {
      lang,
    }
  },
}
</script>

<style scoped></style>
