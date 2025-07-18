// nuxt.config.js

export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'vercel',
  },
  compatibilityDate: '2025-05-15',
  devtools: {
    enabled: false,
  },

  modules: [
    '@nuxt/content',
    'vuetify-nuxt-module'
  ],

  // --- START: Added Vuetify Configuration ---
  // All your theme logic is now here, where the build process can see it.
  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: "mdi",
      },
      theme: {
        defaultTheme: "light",
        themes: {
          light: {
            colors: {
              primary: "#1e3c61",
              secondary: "#e46c0d",
              third: "#e76b09",
              fourth: "#ffa600",
              fifth: "#226498",
              gray: "#f7f7f7",
              text: "#212121",
              thead: "#f3f3f3",
              heading: "#1e3c61",
              navItem: "#d1e1e5",
              headerItem: "#ffffff",
              leftSidebar: "#f7f7f7",
              theading: "#f7f7f7",
              tborder: "#cccccc",
            },
          },
        },
      },
    }
  },
  // --- END: Added Vuetify Configuration ---

  css: [
    '@/assets/css/markdown-theme4.css',
  ],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/@mdi/font@7.x/css/materialdesignicons.min.css'
        }
      ]
    }
  },
  content:{
    highlight:{
      theme: {
      default: 'github-dark', // 👈 applies always, regardless of mode
    },
    experimental: {
      search: true
    }
    }
  } as any,
})