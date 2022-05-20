import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    // transpile: ['primevue','tone', 'standardized-audio-context'],
    transpile: ['primevue'],
  },
  buildModules: ['@nuxtjs/eslint-module'],
  css: [
    'primevue/resources/themes/mdc-dark-indigo/theme.css', // theme
    'primevue/resources/primevue.min.css', // core css
    'primeicons/primeicons.css', // icons
    'primeflex/primeflex.css', // flex
  ],
})
