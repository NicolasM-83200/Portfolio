/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        profil: "url('/src/assets/images/profil.webp')",
        titre: "url('/src/assets/images/titre-portfolio.svg')",
      },
      keyframes: {
        "trans-right": {
          "0%": { transform: "translateX(900px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 0.5 },
        },
        "trans-left": {
          "0%": { transform: "translateX(-900px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "link-active": {
          to: { width: "100%" },
        },
        "rotate-link": {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "100%": { transform: "rotate(360deg) scale(1.5)" },
        },
        scale: {
          "50%": { transform: "translate(-50%, 50%) scale(0.8)" },
          "100%": { transform: "translate(-50%, 50%) scale(1)" },
        },
      },
      animation: {
        "trans-right": "trans-right 1s ease-in-out forwards",
        "trans-left": "trans-left 1s ease-in-out forwards",
        "link-active": "link-active 0.3s ease-in-out forwards",
        scale: "scale 10s ease-in-out infinite",
        "rotate-link": "rotate-link 0.5s ease-in-out forwards",
      },
      gradientColorStopPositions: {
        25: "25%",
      },
    },
    colors: {
      primary: "#1F5F8B",
      secondary: "#253B6E",
      terciary: "#1891AC",
      quaternary: "#D2ECF9",
      pureWhite: "#ffffff",
      white: "#e2e8f0",
      black: "#0a0a0a",
      gray: "#a3a3a3",
      red: {
        100: "#FEE2E2",
        200: "#FECACA",
        300: "#FCA5A5",
        400: "#F87171",
        500: "#EF4444",
        600: "#DC2626",
        700: "#B91C1C",
        800: "#991B1B",
        900: "#7F1D1D",
      },
      orange: {
        100: "#FEEBC8",
        200: "#FBD38D",
        300: "#F6AD55",
        400: "#ED8936",
        500: "#DD6B20",
        600: "#C05621",
        700: "#9C4221",
        800: "#7B341E",
        900: "#652B19",
      },
    },
  },
  plugins: [],
};
