/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '425px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif']
      },
    },
  },
  plugins: [],
}

