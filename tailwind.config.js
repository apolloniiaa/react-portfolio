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
        primary: '#040b21ed',
        secondary: '#080313',
        theritary: '#fab2cb14',
        fourth: '#0e0008',
        fifth: '#fa728a',
        card: '#9b95c20d',
        background: ' #03a9f40f',
        textLight: '#2a275ccc;',
        linksLight: '#fff6b6db',
        portfolioCard: '#040b21ed',
        portfolioCardText: '#fff6b6db',
        subtitle: '#adae88',
        bgDark: '#010911',
        textDark: '#1ff9c7',
        cardDark: '#fefffa12',
        darkbg: '#77be440f',
      },
    },
  },
  plugins: [],
};
