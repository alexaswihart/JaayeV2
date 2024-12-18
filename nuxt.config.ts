export default defineNuxtConfig({
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },

  $development: {
    //
  },

  $env: {
    staging: {
      // 
    }
  },

  compatibilityDate: '2024-12-11',
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },

  googleFonts: {
    families: {
      'DM+Mono': true,
      'DM+Sans': true
    }
  }
})