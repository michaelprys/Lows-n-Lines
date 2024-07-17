// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss'],
    future: {
        compatibilityVersion: 4,
    },
    css: [
        '~/assets/styles/main.css',
        '~/assets/styles/font-face.css',
        '~/assets/styles/tailwind.css',
    ],
});
