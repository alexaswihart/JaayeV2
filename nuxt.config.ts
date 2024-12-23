export default defineNuxtConfig({
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },

  compatibilityDate: '2024-12-11',
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxthub/core'],
  
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
  },

  hub: {
    // NuxtHub options
  }
})