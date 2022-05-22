// import presetIcons from '@unocss/preset-icons'
import { defineNuxtConfig } from 'nuxt'
import '@unocss/nuxt'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    // title: process.env.npm_package_name || '',
    title: '星河万里_Starry' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
  },
  build: {
    // transpile: ['primevue','tone', 'standardized-audio-context'],
    transpile: ['primevue'],
  },
  buildModules: ['@nuxtjs/eslint-module', '@vueuse/nuxt', '@unocss/nuxt'],
  generate: {
    routes: ['/'],
    subFolders: true,
  },
  css: [
    // 'primevue/resources/themes/mdc-light-indigo/theme.css', // theme
    'primevue/resources/themes/rhea/theme.css', // theme
    'primevue/resources/primevue.min.css', // core css
    'primeicons/primeicons.css', // icons
    'primeflex/primeflex.css', // flex
    '~/assets/styles/layout.scss',
    '~/assets/styles/demo/flags/flags.css',
  ],
  unocss: {
    // presets
    preflight: true,
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,
    typography: true,
    wind: true,
    webFonts: {
      provider: 'google', // default provider
      fonts: {
        // these will extend the default theme
        sans: 'Poppins:100,200,300,400,500,600,700,800,900',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        // custom ones
        lobster: 'Lobster',
        lato: [
          {
            name: 'Lato',
            weights: ['400', '700'],
            italic: true,
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    },

    // core options
    shortcuts: [
      {
        'form-input': `px-2 py-2 border border-gray rounded-md w-full
          focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 focus:border-blue-500 focus:outline-none
          `,
      },
      {
        'btn-primary':
          'px-4 py-2 border borde-blue-500 rounded-lg appearance-none bg-blue-500 text-white inline-flex justify-center hover:bg-blue-600',
      },
      {
        'alert-info':
          'px-2 py-2 rounded border bg-sky-500 text-white border-sky-500 w-full flex',
      },
    ],
    rules: [],
  },
})
