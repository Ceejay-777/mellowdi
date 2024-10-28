import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FFFFFF",
          dark: "#000000",
        },
        secondary: {
          light: "#F2F2F2",
          dark: "#0C0C0C",
        },
        accent: "#FF7E3A",
      },
      screens: {
        mmd: "460px",
      },
    },
    fontFamily: {
      sans: ["var(--font-sfpro)"],
    },
  },
  daisyui: {
    themes: [
      {
        myLight: {
          primary: "#FFFFFF",
          secondary: "#F2F2F2",
          accent: "#FF7E3A",
          neutral: "#FF7E3A",
          "base-100": "#F2F2F2",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      {
        myDark: {
          primary: "#000000",
          secondary: "#0D0D0D",
          accent: "#FF7E3A",
          neutral: "#FF7E3A",
          "base-100": "#0D0D0D",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  darkMode: ["selector", '[data-theme="myDark"]'],
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
export default config;
