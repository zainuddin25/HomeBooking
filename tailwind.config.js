/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'black' : '#272635',
        'white-secondary' : '#F3F3F3',
        'orange' : '#FE9600'
      },
      fontFamily: {
        'work' : 'Work Sans'
      }
    },
    fontSize: {
      'xxs': '10px',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  plugins: [],
}
