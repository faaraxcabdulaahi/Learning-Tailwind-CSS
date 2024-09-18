/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/**/*.{html,js}"],
  theme: {
    // Setting screen sizes or break points
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      // Setting fontfamily
      fontFamily:{
        sans:['Josefin Sans','sans-serif'],
        alata: ['Alata'],
      },
      letterSpacing: {
        widest: '.3em',
      },
    },
  },
  plugins: [],
};
