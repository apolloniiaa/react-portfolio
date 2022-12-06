/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        burtons: 'burtons',
      },

      colors: {
        primary: '#1b0121',
        secondary: '#0b000d',
        theritary: '#fab2cb14',
        fourth: '#0e0008',
        fifth: '#fa728a',
        card: '#120120f2',
      },
    },
  },
  plugins: [],
};
