/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {

    extend: {
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
        poppins: ['Poppins', 'sans-serif'], // Poppins fontunu ekle
      },
      container: {
      center: true, 
      padding: '2rem',
      screens: {
        sm: '100%',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        "2xl":'1536px',
      },
    },
  },
},
  plugins: [],
};
