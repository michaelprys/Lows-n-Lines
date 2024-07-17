module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
    screens: {
      "extra-max": { raw: "(width <= 1700px)" },
      "2xl-max": { raw: "(width <= 1535px)" },
      "xl-max": { raw: "(width <= 1279px)" },
      "lg-max": { raw: "(width <= 1023px)" },
      "md-max": { raw: "(width <= 767px)" },
      "sm-max": { raw: "(width <= 639px)" },

      "extra-min": { raw: "(width > 1700px)" },
      "2xl-min": { raw: "(width > 1535px)" },
      "xl-min": { raw: "(width > 1279px)" },
      "lg-min": { raw: "(width > 1023px)" },
      "md-min": { raw: "(width > 767px)" },
      "sm-min": { raw: "(width > 639px)" },
    },
  },
  plugins: [require("flowbite/plugin")],
};
