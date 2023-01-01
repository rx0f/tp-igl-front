/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1C3988",
        "dark-blue": "#091638",
        "white-blue": "#F3F3FA",
        hover: "#6E8AE9",
      },
      fontFamily: {
        Merriweather: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};