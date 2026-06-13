/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        kc: {
          bg: "#121212",
          surface: "#1B1B1B",
          card: "#222222",
          border: "#2B2B2B",
          green: "#01BC8D",
          "green-hover": "#00A87D",
          red: "#F65454",
          muted: "#888888",
          text: "#F3F3F3",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
