/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#84A4FC",
        secondary: "#eeeeee",
        tertiary: "#1d1836",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#eeeeee",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/blue.png')",
        "experience-pattern": "url('/src/assets/blue.png')",
        "work-pattern": "url('/src/assets/blue.png')",
      },
    },
  },
  plugins: [],
};