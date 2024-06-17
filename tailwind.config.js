/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          '100': '#CF9EAC',
          '300': '#887177',
          '400': '#0D1C30',
          '600': '#3A2F0B',
          '800': '#170000',
          '900': '#000000'
        }
      }
    },
  },
  plugins: [],
}