/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'slg':'1200px',
      // => @media (min-width: 768px) { ... }
      'lg': '1600px',
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      fontFamily:{
        sans: ['Cairo', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
