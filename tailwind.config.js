/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xsm: '0.7rem',
      sm: '0.8rem',
      ssm: '0.85rem',
      ss: '0.9rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      fontFamily: {
        "inter": "Inter, sans-serif"
      },
      colors: {
        gray: {
          "700": "#333",
          "primary": "#1c1c1c",
          "secondary": "#282828",
          "tertiary": "#333333"
        }
      }
    },
  },
  plugins: [],
}
