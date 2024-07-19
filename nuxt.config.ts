// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "shadcn-nuxt"],
  future: {
    compatibilityVersion: 4,
  },
  css: ["~/assets/styles/main.css", "~/assets/styles/font-face.css"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  shadcn: {
    prefix: "",
    componentDir: "app/components/ui",
  },
});
