/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },

      colors: {
        skyBlue: "#E8FAFF",
        offWhite: "#F4FCFF",
        dkBlue: "#004865",
        ltBlue: "#42C6EC",
        homegrad1: "#B0EDFF00",
        homegrad2: "#CCEFFAFA",
        ltBlue2: "#B0EDFF",
        navGray: "#232323",
        logoGray1: "#58585A",
        logoGray2: "#949599",
      },
    },
  },
  plugins: [],
};
