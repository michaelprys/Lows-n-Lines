// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  vite: {
    optimizeDeps: {
      exclude: ["vee-validate"],
      include: ["tailwindcss"],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "shadcn-nuxt",
    "@nuxtjs/leaflet",
    "nuxt-easy-lightbox",
    "@vee-validate/nuxt",
  ],
  future: {
    compatibilityVersion: 4,
  },
  css: [
    "~/assets/styles/main.css",
    "~/assets/styles/animations.css",
    "~/assets/styles/font-face.css",
  ],
  shadcn: {
    prefix: "",
    componentDir: "app/components/ui",
  },
  runtimeConfig: {
    databaseUrl: "",
    public: {
      apiBase: "/api",
    },
  },
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
      link: [
        {
          rel: "preload",
          href: "/fonts/Gin Test.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/Inter Bold.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/Inter Medium.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/Inter Semi Bold.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/Inter.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/roboto-v30-latin-700.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/roboto-v30-latin-900.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/roboto-v30-latin-regular.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  colorMode: {
    preference: "light",
    classSuffix: "",
  },
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
});
