// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  googleFonts: {
    families: {
      "Playfair Display SC": true,
      Inter: true,
    },

    download: true,
  },
  nitro: {
    static: true,
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: "rgb(var(--color-primary)/1)",
          },
          brand: {},
        },
      },
    },
  },
  css: ["./assets/css/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-feather-icons",
  ],
});
