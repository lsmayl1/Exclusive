/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        F5F5F5: "#F5F5F5", // Özelleştirilmiş gradyan
        DB4444: "#DB4444",
        F5F5F5:"#F5F5F5",
        "00FF66":"#00FF66",
      },
      backgroundColor: {
        F5F5F5: "#F5F5F5", // Özelleştirilmiş gradyan
        DB4444: "#DB4444",
        "00FF66":"#00FF66",
        D9D9D9:"#D9D9D9",
        "0D0D0D":"#0D0D0D",
        "2F2E30":"#2F2E30"
      },
      spacing: {
        "dynamic-gap": "clamp(16px, 5vw, 48px)", // Min: 16px, Orta: 5% genişlik, Max: 48px
      },
      fontWeight: {
        hairline: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Poppins fontunu ekle
        inter: ["Inter", "sans-serif"],
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "100%",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
    },
  },
  plugins: [],
};
