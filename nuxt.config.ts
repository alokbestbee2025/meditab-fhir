export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'vercel',
    prerender:{
      crawl: true,
      routes: ['/'],
    }
  }as any,
  compatibilityDate: '2025-05-15',
  devtools: { 
    enabled: false,
   },
   
  modules: [
    '@nuxt/content'
  ],
  css: [
    'vuetify/lib/styles/main.sass',
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

