/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        baseBG: "#2F3438 ",
        baseText: "#eceeef",
        navBG: "#262a2d",
      },
      fontFamily: {
        sans: ["Segoe Print", "Helvetica", "Arial", "sans-serif"],
        cursive: ["Bradley Hand", "Chilanka", "TSCu_Comic", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
