/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blue: "#4B0082",
        "dark-blue": "#2F4F4F",
        "white-blue": "#EFFEFE",
        hover: "#5C1193",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      spacing: {
        112: "28rem",
        144: "34rem",
      },
    },
  },
  plugins: [],
};
