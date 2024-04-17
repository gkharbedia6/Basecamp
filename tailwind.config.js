/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Noto Sans Georgian"],
        accent: ["BPG Banner Caps"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      background: "#EFF4F5",
      primary: "#585EE3",
      "primary-light": "#F5F8FF",
      black: {
        pure: "#000000",
        900: "#1D2D35",
        600: "#657178",
      },
    },
    boxShadow: {
      sm: "0 0 20px rgba(0, 0, 0, 0.10)",
      lg: "0 0 40px rgba(0, 0, 0, 0.08)",
    },
    screens: {
      tbt: "1024px",
      sm: "1240px",
      lg: "1920px",
    },
    fontSize: {
      "heading-one": "24px",
      "heading-two": "20px",
      "heading-three": "14px",
      "heading-mobile": "16px",
      "body-regular": "14px",
      "body-medium": "16px",
      "body-small": "12px",
    },
    lineHeight: {
      40: "40px",
      28: "28px",
      24: "24px",
      20: "20px",
      16: "16px",
    },
    letterSpacing: {
      xs: "-0.24px",
      sm: "0.2px",
      md: "0.35px",
      lg: "0.5px",
    },
  },
  plugins: [],
};
