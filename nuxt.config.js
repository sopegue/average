export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: 'Pourquoi ma moyenne (Why my average) ?',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'twitter', name: 'twitter:card', content: 'summary' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://sopegue.netlify.app/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'PMM (Pourquoi ma moyenne ?)',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'PMM (Pourquoi ma moyenne ?)',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'PMM (Pourquoi ma moyenne ?)',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://sopegue.netlify.app/enjoy.png',
      },
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/6ce9431069.js',
        crossorigin: 'anonymous',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Indie+Flower',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/directive.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    'nuxt-windicss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/robots',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
