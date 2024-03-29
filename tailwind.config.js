/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  prefix: "hyp-",
  content: [
    "./BlazorHypiness/wwwroot/**/*.{html,htm,js}",
    "./BlazorHypiness/Components/**/*.{razor, razor.cs}",
    "./src/css/styles/**/*.css",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
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
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    letterSpacing: {
      wide: "-0.025em",
      wider: "0.025em",
      widest: "0.05em",
    },
    lineHeight: {
      normal: "0.875rem",
      none: "1rem",
      tight: "1.25rem",
      snug: "1.375rem",
      normal: "4.5rem",
      relaxed: "1.625rem",
      loose: "2rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "48px",
      12: "60px",
    },
    boxShadow: {
      sm: "0px 1px 2px rgba(0, 0, 0, 0.1)",
      base: "0px 1px 2px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1)",
      md: "0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1)",
      lg: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 10px 15px rgba(0, 0, 0, 0.1)",
      xl: "0px 10px 10px rgba(0, 0, 0, 0), 0px 20px 25px rgba(0, 0, 0, 0.1)",
      "2xl": "0px 25px 50px rgba(0, 0, 0, 0.3)",
    },
    extend: {},
  },
  plugins: [],
};
