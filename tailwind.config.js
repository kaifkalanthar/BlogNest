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
      dprimary: "#7E22CE",
      white: "#fff",
      black: "#111",
      yellow: "#FFBE5E",
      gray: "#606060",
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
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
