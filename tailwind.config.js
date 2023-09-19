/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./BlazorHypiness/wwwroot/**/*.{html,htm,js,css}",
    "./BlazorHypiness/Components/**/*.razor",
    "./src/css/**/*.css",
  ],
  theme: {
    colors: {
      primary: {
        900: "#1E3A8A",
        800: "#1E40AF",
        700: "#1D4ED8",
        600: "#2563EB",
        500: "#3B82F6",
        400: "#60A5FA",
        300: "#93C5FD",
        200: "#BFDBFE",
        100: "#DBEAFE",
        50: "#EFF6FF",
      },
      secondary: {
        900: "#7C2D12",
        800: "#9A3412",
        700: "#C2410C",
        600: "#EA580C",
        500: "#F97316",
        400: "#FB923C",
        300: "#FDBA74",
        200: "#FED7AA",
        100: "#FFEDD5",
        50: "#FFF7ED",
      },
      accent: {
        900: "#78350F",
        800: "#92400E",
        700: "#B45309",
        600: "#D97706",
        500: "#F59E0B",
        400: "#FBBF24",
        300: "#FCD34D",
        200: "#FDE68A",
        100: "#FEF3C7",
        50: "#FFFBEB",
      },
      error: colors.red,
      success: colors.emerald,
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
    },
    fontFamily: {
      base: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
