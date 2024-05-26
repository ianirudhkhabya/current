/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#170328",
        "purple-1": "#9B51E0",
        "yellow-1": "#F2C94C",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #170328 0%, #4A117A 100%)",
        "line-gradient":
          "linear-gradient(90deg, #FFF 0%, #F2D3FF 51.5%, #FFF 100%)",
      },
    },
  },
  plugins: [],
};
