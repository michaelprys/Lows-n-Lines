// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "shadcn-nuxt",
    "nuxt-easy-lightbox",
  ],
  future: {
    compatibilityVersion: 4,
  },
  css: ["~/assets/styles/main.css", "~/assets/styles/font-face.css"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Lows 'n' Lines",
    },
  },
  shadcn: {
    prefix: "",
    componentDir: "app/components/ui",
  },
});
