/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        baseBG: "#212529",
        baseText: "#e9ecee",
        baseTextDim: "#5c666d",
        navBG: "#212529",
        navBtn: "#242526",
        navBtnBorder: "#181b1e",
      },
      fontFamily: {
        sans: ["Segoe Print", "Helvetica", "Arial", "sans-serif"],
        cursive: ["Bradley Hand", "Chilanka", "TSCu_Comic", "cursive"],
      },
      // typography: (theme) => ({
      //   DEFAULT: {
      //     css: {
      //       a: {
      //         color: "#68c6fa",
      //       }
      //     }
      //   }
      // }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
