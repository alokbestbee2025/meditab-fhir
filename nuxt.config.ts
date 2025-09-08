// nuxt.config.js
import { generateRoutes } from './utils/routes'
export default defineNuxtConfig({
  ssr: false,
    nitro: {
    preset: 'vercel',
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },
  hooks: {
    'nitro:config': async (nitroConfig) => {
      try {
        const routes = await generateRoutes();
        console.log('Generated routes:', routes)
        if (nitroConfig.prerender) {
          nitroConfig.prerender.routes = routes
        }
      } catch (error) {
        console.error('Failed to generate routes:', error)
      }
    }
  },
  experimental: {
    payloadExtraction: false // Disable payload extraction since we're using full SSG
  },
  compatibilityDate: '2025-05-15',
  devtools: {
    enabled: false,
  },

  // This is the correct, official way to load a global stylesheet.
  // It tells Nuxt this is a dependency that MUST be included in the build.
  css: [
    '@/assets/css/markdown-theme4.css',
    '@/assets/css/mainPages.css',
  ],

  modules: [
    '@nuxt/content',
    'vuetify-nuxt-module',
    '@nuxt/image'
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

  
  // dotenv
   runtimeConfig: {
    public: {
      // Public runtime config
    },
    // Private runtime config
    emailHost: process.env.EMAIL_HOST,
    emailPort: process.env.EMAIL_PORT,
    emailUser: process.env.EMAIL_USER,
    emailPass: process.env.EMAIL_PASS,
    emailFrom: process.env.EMAIL_FROM,
    emailTo: process.env.EMAIL_TO,
  },
})