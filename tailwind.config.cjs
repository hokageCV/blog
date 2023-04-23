/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        baseBG: "#2F3438",
        baseText: "#a6adbb",
        baseTextDim: "#5c666d",
        navBG: "#2F3438",
        navBtn: "#262a2d",
        navBtnBorder: "#1d2023",
        night: {
          4: "#2E3440",
          3: "#3B4252",
          2: "#434C5E",
          1: "#4C566A",
        },
      },
      fontFamily: {
        sans: ["Segoe Print", "Helvetica", "Arial", "sans-serif"],
        cursive: ["Bradley Hand", "Chilanka", "TSCu_Comic", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
