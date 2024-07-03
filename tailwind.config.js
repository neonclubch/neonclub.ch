import { nextui } from "@nextui-org/theme";

const colors = {
  focus: "#2EADDA",
  primary: {
    DEFAULT: "#2EADDA",
  },
  success: {
    DEFAULT: "#1ADC38",
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
    "./mdx-components.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: false,
      themes: {
        dark: {
          colors: { ...colors, background: "#0D0221", },
        },
        light: { colors },
      },
    }),
  ],
};
