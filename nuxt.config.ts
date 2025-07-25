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

  // This is the correct, official way to load a global stylesheet.
  // It tells Nuxt this is a dependency that MUST be included in the build.
  css: [
    '@/assets/css/markdown-theme4.css',
  ],

  modules: [
    '@nuxt/content',
    'vuetify-nuxt-module'
  ],

  vuetify: {
    vuetifyOptions: {
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
  
  // This is a crucial fix for production builds.
  // It tells Nuxt to explicitly process Vuetify to prevent build errors.
  build: {
    transpile: ['vuetify'],
  },

  app: {
    head: {
      link: [
        // We only need the icon font here. Our custom CSS is handled above.
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
        default: 'github-dark',
      },
      experimental: {
        search: true
      }
    }
  } as any,
})