/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#212121",
        accentPurple: "#673AB7",
        accentCyan: "#00BCD4",
        accentRed: "#FD3F30",
        gold: "#FFD700",
        silver: "#C0C0C0",
      },
      fontFamily: {
        pally: ["Pally", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
