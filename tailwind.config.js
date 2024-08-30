/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#6e3dbe",
        labelColor: "#9e9e9e",
        white: "#fff",
      },
      backgroundImage: {
        navbarColor: "linear-gradient(135deg, #dce35b 0%, #45a247 100%)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        label: [
          "14px",
          {
            lineHeight: "normal",
            fontWeight: "500",
          },
        ],
      },
      boxShadow: {
        login: "2px 5px 10px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
