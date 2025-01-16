// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    components: true,
    compatibilityDate: '2024-04-03',
    future: {
        compatibilityVersion: 4,
    },
    devtools: { enabled: true },
    runtimeConfig: {
        public: {
            apiBase: '/api',
        },
        databaseUrl: '',
        user: '',
        appPassword: '',
        emailPort: '',
        appUrl: '',
        // session: {import { ensureError } from '~/utils/ensureError';
        //     maxAge: 60 * 60 * 24 * 7,
        // },
    },
    modules: [
        '@nuxtjs/color-mode',
        '@nuxt/image',
        'shadcn-nuxt',
        'nuxt-easy-lightbox',
        'nuxt-auth-utils',
        '@nuxt/eslint',
        '@nuxtjs/tailwindcss',
    ],
    css: [
        '~/assets/styles/main.css',
        '~/assets/styles/animations.css',
        '~/assets/styles/font-face.css',
        'leaflet/dist/leaflet.css',
    ],
    shadcn: {
        prefix: '',
        componentDir: 'app/components/ui',
    },
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in',
        },
        layoutTransition: {
            name: 'layout',
            mode: 'out-in',
        },
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: "Lows 'n' Lines",
            link: [
                {
                    rel: 'preload',
                    href: '/fonts/Gin Test.woff2',
                    as: 'font',
                    type: 'font/woff2',
                    crossorigin: 'anonymous',
                },
                {
                    rel: 'preload',
                    href: '/fonts/Inter Bold.woff2',
                    as: 'font',
                    type: 'font/woff2',
                    crossorigin: 'anonymous',
                },
                {
                    rel: 'preload',
                    href: '/fonts/Inter Medium.woff2',
                    as: 'font',
                    type: 'font/woff2',
                    crossorigin: 'anonymous',
                },
                {
                    rel: 'preload',
                    href: '/fonts/Inter Semi Bold.woff2',
                    as: 'font',
                    type: 'font/woff2',
                    crossorigin: 'anonymous',
                },
                {
                    rel: 'preload',
                    href: '/fonts/Inter.woff2',
                    as: 'font',
                    type: 'font/woff2',
                    crossorigin: 'anonymous',
                },
                {
                    rel: 'preload',
                    href: '/fonts/roboto-v30-latin-700.woff2',
                    as: 'font',
                    type: 'font/woff2',
                    crossorigin: 'anonymous',
                },
                {
                    rel: 'preload',
                    href: '/fonts/roboto-v30-latin-900.woff2',
                    as: 'font',
                    type: 'font/woff2',
                    crossorigin: 'anonymous',
                },
                {
                    rel: 'preload',
                    href: '/fonts/roboto-v30-latin-regular.woff2',
                    as: 'font',
                    type: 'font/woff2',
                    crossorigin: 'anonymous',
                },
            ],
        },
    },
    colorMode: {
        preference: 'light',
        classSuffix: '',
    },
});
