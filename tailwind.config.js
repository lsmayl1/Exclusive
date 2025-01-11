/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        F5F5F5: "#F5F5F5", // Özelleştirilmiş gradyan
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
