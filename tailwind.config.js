/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
    colors: {
      primary: "#C59CEF",
      white: "#fff",
      black: "#111",
    },
    fontFamily: {
      display: ["Cherry Cream Soda"],
      sans: ["Poppins", "sans-serif"],
    },
    backgroundImage: {
      "hero-bg": "url('./assets/hero-bg.svg')",
    },
  },
  plugins: [],
};
