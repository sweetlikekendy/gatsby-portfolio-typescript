const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      primary: {
        50: "#e6ebee",
        100: "#ccd7dd",
        200: "#b3c4cc",
        300: "#99b0bb",
        400: "#809cab",
        500: "#66889a",
        600: "#4d7489",
        700: "#336178",
        800: "#1a4d67",
        900: "#003956",
      },
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      szUnderline: "100% 0.2em",
      szUnderlineHover: "100% 88%",
    },

    backgroundPosition: {
      bottom: "bottom",
      "bottom-4": "center bottom 1rem",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
      posUnderline: "0 88%",
    },
    objectPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
      "center-bottom": "center bottom",
      "center-top": "center top",
      "50%-50%": "50% 50%",
    },
    extend: {
      height: {
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      },
      transitionProperty: {
        transition: "background-size",
      },
      width: {
        "45%": "45%",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      backgroundSize: ["hover", "focus"],
      boxShadow: ["active"],
      textColor: ["active"],
      transitionProperty: ["hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
