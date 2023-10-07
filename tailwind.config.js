const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'main-green': '#45C486',
        'main-black': '#060710',
        'main-gray': '#EDE8E3',        
        'main-blue': '#191D63',
        'second-gray': '#747475',



      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}