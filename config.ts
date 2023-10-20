import type { Config } from "tailwindcss";

export const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nav-bg": "#17161A",
        "card-bg": "#3A3841",
        "rank-bg": "#313B45",
      },
      // screens: {
      //   "2xl": { min: "1680px" },
      //   // => @media (min-width: 1535px) { ... }

      //   xl: { min: "1430px" },
      //   // => @media (min-width: 1279px) { ... }

      //   lg: { min: "1023px" },
      //   // => @media (min-width: 1023px) { ... }

      //   md: { min: "767px" },
      //   // => @media (min-width: 767px) { ... }

      //   sm: { min: "639px" },
      //   // => @media (min-width: 639px) { ... }
      // },
    },
  },
  plugins: [],
};
