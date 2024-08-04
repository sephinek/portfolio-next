/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#323130",
        logo: "#ff82c7",
        primary: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          350: "#c3c3c3",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
        accent: {
          50: "#fff6fb",
          100: "#ffd9ee",
          200: "#ffb9df",
          250: "#ff9ed3",
          300: "#ff72c0",
          400: "#ff31a2",
          500: "#FF1494",
          600: "#e61286",
          700: "#c21072",
          800: "#8f0b54",
        },
      },
      fontSize: {
        "2xs": ".7rem",
        "3xs": ".65rem",
      },
      backgroundColor: {
        headerTransparent: "rgba(255 255 255 / 40%)",
      },
      backgroundImage: {
        gradientButton:
          "linear-gradient(120deg, rgba(144, 143, 143, 49%) 0%, rgba(255,49, 162, 35%) 39%, rgba(255, 20, 148, 57%) 66%, rgba(130, 130, 130, 51%) 100%)",
        gradientButtonHover:
          "linear-gradient(200deg, rgba(144, 143, 143, 49%) 0%, rgba(255,49, 162, 55%) 59%, rgba(255, 20, 148, 57%) 66%, rgba(130, 130, 130, 51%) 100%)",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        loading: {
          "0%": {
            "box-shadow": "40px 0 #000, -40px 0 #0002",
            background: "#000",
          },
          "33%": {
            "box-shadow": "40px 0 #000, -40px 0 #0002",
            background: "#0002",
          },
          "66%": {
            "box-shadow": "40px 0 #0002, -40px 0 #000",
            background: "#0002",
          },
          "100%": {
            "box-shadow": "40px 0 #0002, -40px 0 #000",
            background: "#000",
          },
        },
        bounce: {
          "0%": {
            transform: "translateY(-30%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
          "100%": {
            transform: "translateY(-30%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
        },
      },
      animation: {
        slide: "slide 70s linear 3s infinite",
        loading: "loading 2s infinite linear alternate",
        bounce: "bounce 1.5s infinite",
      },
    },
  },
  plugins: [],
};
