/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#5D3C81",
        secondary: "#00FF87",
        third: "#C32B42"
      }
    },
  },
  plugins: [],
}
