// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  vite: {
    optimizeDeps: {
      exclude: ["vee-validate"],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "shadcn-nuxt",
    "@nuxtjs/leaflet",
    "nuxt-easy-lightbox",
    "@pinia/nuxt",
    "@vee-validate/nuxt",
  ],
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  css: [
    "~/assets/styles/main.css",
    "~/assets/styles/font-face.css",
    "~/assets/styles/animations.css",
  ],
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    layoutTransition: {
      name: "layout",
      mode: "out-in",
    },
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
  colorMode: {
    classSuffix: "",
  },
});
