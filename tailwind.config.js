/** @type {import('tailwindcss').Config} */

const defaultColors = require("tailwindcss/colors");

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        ...defaultColors,
        'main': '#1D2123',
        'dark-alt': '#1A1E1F',
        'light': '#EFEEE0',
        'secondary': '#FACD66',
        'playlist': '#609EAF'
      }, 

      fontFamily: {
        quicksand: ['Quicksand', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}