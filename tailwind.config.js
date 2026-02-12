import { nextui } from "@nextui-org/theme";

const colors = {
  focus: "#FF3131",//"#1ADC38",
  primary: {
    DEFAULT: "#FF3131",//"#1ADC38",
  },
  success: {
    DEFAULT: "#FF3131",//"#1ADC38",
  },
  warning: {
    DEFAULT: "#F9C80E",
  },
  danger: {
    DEFAULT: "#FD1D53",
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./mdx-components.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        display: ["var(--font-display)"],
      },
      colors: {
        neon: "rgb(var(--neon) / <alpha-value>)",
        surface: "#0A0A0A",
      },
      letterSpacing: {
        display: "0.25em",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: false,
      themes: {
        dark: {
          colors: { ...colors, background: "#050505" },
        },
        light: {
          colors: { ...colors, background: "#050505" },
        },
      },
    }),
  ],
};
