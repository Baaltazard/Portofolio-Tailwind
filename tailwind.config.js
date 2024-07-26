/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        nude: '#059669',
        smooth: '#0891b2',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
