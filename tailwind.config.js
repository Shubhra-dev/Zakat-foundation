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
        ash: "#212121",
      },
      fontSize: {
        bigTitle: "70px",
        title: "50px",
        s1: "34px",
        s2: "20px",
        s3: "12px",
        h2: "38px",
        h3: "30px",
        h4: "24px",
        paragraph: "18px",
        light: "15px",
        small: "10px",
        xsmall: "8px",
      },
      fontFamily: {
        pally: ["Outfit", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      screens: {
        tab: "770px",
        laptop: "1300px",
        large: "1920px",
      },
      transitionProperty: {
        top: "top",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    // other plugins...
  ],
};
