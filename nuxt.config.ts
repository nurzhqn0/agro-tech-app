export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    prerender: {
      routes: ["/"],
    },
  },

  modules: [
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxt/eslint",
    "@nuxt/content",
    "@vite-pwa/nuxt",
  ],

  pwa: {
    registerType: "prompt",

    includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
    manifest: {
      name: "My Awesome App 42314 123 4",
      short_name: "MyApp",
      description: "My Awesome App description",
      theme_color: "#ffffff",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },

    workbox: {
      globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      navigateFallback: "/",
    },

    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: "/",
      navigateFallbackAllowlist: [/^\/$/],
      type: "module",
    },

    registerWebManifestInRouteRules: true,
  },

  compatibilityDate: "2025-03-29",

  googleFonts: {
    families: {
      Manrope: [400, 500, 600, 700, 800],
      "Open Sans": [400, 500, 600, 700, 800],
      "SF Pro": [400, 500, 600, 700, 800, 900],
      "Nunito Sans": [400, 500, 600, 700, 800],
    },
  },
  colorMode: {
    preference: "light",
  },
  ui: {
    icons: [
      "mdi",
      "heroicons",
      "ri",
      "wi",
      "ph",
      "mingcute",
      "tabler",
      "gravity-ui",
      "heroicons-solid",
    ],
  },
  css: ["@/assets/main.css"],
});
