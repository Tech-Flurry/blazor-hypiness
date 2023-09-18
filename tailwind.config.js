/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./BlazorHypiness/wwwroot/**/*.{html,htm,js,css}", "./BlazorHypiness/Components/**/*.razor", 
  "./src/css/**/*.css"],
  theme: {
    colors: {
      'primary': '#1fb6ff',
    },
    fontFamily: {
      base: ['Inter', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

