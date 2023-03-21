/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "primary": "#1c1c1c",
          "secondary": "#282828",
          "tertiary": "#333333"
        }
      }
    },
  },
  plugins: [],
}
