/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      fontFamily: {
        Monamd: ["mdwide", "serif"],
        Monabold: ["boldwide", "serif"],
        Monaregular: ["regwide", "serif"],
        Monasemiwide: ["semibold", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

// keyframes: {
//   "accordion-down": {
//     from: { height: "0" },
//     to: { height: "var(--radix-accordion-content-height)" },
//   },
//   "accordion-up": {
//     from: { height: "var(--radix-accordion-content-height)" },
//     to: { height: "0" },
//   },
// },
// animation: {
//   "accordion-down": "accordion-down 0.2s ease-out",
//   "accordion-up": "accordion-up 0.2s ease-out",
// },
