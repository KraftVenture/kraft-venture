/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        black: "#0E0F0C",
        white: "#FFFFFF",
        amber: "#FFBF00",
      },
      fontFamily: {
        sans: ["Rubik", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
