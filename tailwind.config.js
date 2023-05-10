/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ["./src/app/app.component.html", "./src/**/*.{html,ts}"],
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#4C3D3D",
        secondary: "#C07F00",
        accent: "#FFD95A",
        background: "#FFF7D4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
