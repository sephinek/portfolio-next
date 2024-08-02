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
        primary: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09",
        },
        secondary: "#F1F9ED",
        accent: {
          50: "#fefefa",
          100: "#fdfbec",
          200: "#faf7dc",
          300: "#f6f0bb",
          400: "#f2e99d",
          500: "#F0E691",
          600: "#d8cf81",
          700: "#b6af6d",
          800: "#868151",
          900: "#E1CE1E",
        },
      },
      fontSize: {
        "2xs": ".7rem",
        "3xs": ".65rem",
      },
      backgroundImage: {
        "gradient-button":
          "linear-gradient(to right, rgba(144, 143, 143, 49%) 0%, rgba(250, 253, 128, 65%) 59%, rgba(238, 241, 79, 57%) 66%, rgba(130, 130, 130, 51%) 100%)",
      },
    },
  },
  plugins: [],
};
