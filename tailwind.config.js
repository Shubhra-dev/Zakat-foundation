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
      fontSize: {
        title: "53px",
        paragraph: "25px",
        h3: "34px",
        light: "15px",
      },
      fontFamily: {
        pally: ["Pally", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      screens: {
        laptop: "1300px",
        large: "1440px",
      },
    },
  },
  plugins: [],
};
