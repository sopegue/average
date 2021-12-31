<template>
  <div class="text-white bg-mybg">
    <div v-show="loading" class="w-0 h-0"></div>
    <div v-show="!loading" class="mx-auto w-full h-full">
      <Header class="sticky top-0 bg-mybg" />
      <div class="px-5 py-10 lg:w-2/3 md:w-3/4 w-full mx-auto">
        <nuxt-child />
      </div>
      <Footer class="sticky w-full bottom-0 bg-mybg" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.state.domloading === true
    },
  },
  beforeMount() {
    window.addEventListener('DOMContentLoaded', this.domload, false)
  },
  beforeDestroy() {
    window.removeEventListener('DOMContentLoaded', this.domload, false)
  },
  methods: {
    domload() {
      this.$store.commit('set_Domload', false)
    },
  },
}
</script>

<style>
html {
  background-color: #1f2937;
}
.border-red {
  border: 1px red solid !important;
}
a {
  color: white !important;
}
.bg-mybg {
  background-color: #1f2937;
}
.bgg:hover {
  background-color: #171e29 !important;
}
.w-fit {
  width: intrinsic !important; /* Safari/WebKit utilisent un nom non-standard */
  width: -moz-max-content !important; /* Firefox/Gecko */
  width: -webkit-max-content !important;
}
.h-fit {
  height: intrinsic !important; /* Safari/WebKit utilisent un nom non-standard */
  height: -moz-max-content !important; /* Firefox/Gecko */
  height: -webkit-max-content !important;
}
.w-fulls {
  width: 100% !important;
}
.h-fulls {
  height: 100% !important;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
