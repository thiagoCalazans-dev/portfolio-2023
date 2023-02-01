/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          100: "#ffffff",
          200: "#f5fdfe",
          400: "#656d72",
          800: "#232e35",
          900: "#1e1e1e",
        },
        brand: {
          primary: "#14b8a6",
          secondary: "#f43f5e",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
