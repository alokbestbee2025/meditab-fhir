import { defineNuxtConfig } from 'nuxt/config'
import fg from 'fast-glob'

// ✅ Function to extract routes from content files
async function getContentRoutes() {
  const files = await fg('content/**/*.md', { onlyFiles: true })
  return files
    .map(file =>
      file
        .replace(/^content/, '') // remove 'content' directory prefix
        .replace(/\.md$/, '')    // remove file extension
        .replace(/\/index$/, '') // remove trailing /index
    )
}

export default defineNuxtConfig(async () => {
  const contentRoutes = await getContentRoutes()

  return {
    ssr: true,
    nitro: {
      preset: 'vercel',
      prerender: {
        crawlLinks: true,
        routes: contentRoutes
      }
    },
    compatibilityDate: '2025-05-15',
    devtools: {
      enabled: false
    },
    css: [
      '@/assets/css/markdown-theme4.css',
      '@/assets/css/mainPages.css'
    ],
    modules: [
      '@nuxt/content',
      'vuetify-nuxt-module',
      '@nuxt/image'
    ],
    vuetify: {
      vuetifyOptions: {
        theme: {
          defaultTheme: 'light',
          themes: {
            light: {
              colors: {
                primary: '#1e3c61',
                secondary: '#e46c0d',
                third: '#e76b09',
                fourth: '#ffa600',
                fifth: '#226498',
                gray: '#f7f7f7',
                text: '#212121',
                thead: '#f3f3f3',
                heading: '#1e3c61',
                navItem: '#d1e1e5',
                headerItem: '#ffffff',
                leftSidebar: '#f7f7f7',
                theading: '#f7f7f7',
                tborder: '#cccccc'
              }
            }
          }
        }
      }
    },
    build: {
      transpile: ['vuetify']
    },
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
    content: {
      highlight: {
        theme: {
          default: 'github-dark'
        },
        experimental: {
          search: true
        }
      }
    } as any
  }
})
