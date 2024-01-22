/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "special-font" : "Rubik Burned",
        "special-2" : "Moirai One"
      },
      colors: {
        "main-dark" : "#202020"
      }
    },
  },
  plugins: [],
}

