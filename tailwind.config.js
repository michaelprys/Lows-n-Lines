import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    safelist: ["dark"],
    content: [
        "./app/components/**/*.{js,vue,ts}",
        "./app/layouts/**/*.vue",
        "./app/pages/**/*.vue",
        "./app/plugins/**/*.{js,ts}",
        "./app/app.vue",
        "./app/error.vue",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        screens: {
            "extra-max": { raw: "(width <= 1700px)" },
            "2xl-max": { raw: "(width <= 1535px)" },
            "xl-max": { raw: "(width <= 1279px)" },
            "lg-max": { raw: "(width <= 1023px)" },
            "md-max": { raw: "(width <= 767px)" },
            "sm-max": { raw: "(width <= 639px)" },
            "xs-max": { raw: "(width <= 479px)" },

            "extra-min": { raw: "(width > 1700px)" },
            "2xl-min": { raw: "(width > 1535px)" },
            "xl-min": { raw: "(width > 1279px)" },
            "lg-min": { raw: "(width > 1023px)" },
            "md-min": { raw: "(width > 767px)" },
            "sm-min": { raw: "(width > 639px)" },
            "xs-min": { raw: "(width > 479px)" },
        },
        extend: {
            colors: {
                "dark-el": "#F2F2F2",
                "dark-bg": "#141414",
                "dark-primary": "#212224",
                "dark-border": "#464646",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [animate],
};
