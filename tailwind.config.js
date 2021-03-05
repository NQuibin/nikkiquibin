const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto Condensed', 'sans-serif'],
        cabin: ['Cabin', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        body: {
          fontFamily: theme('fontFamily.cabin'),
        },
        'h1, h2, h3, h4, h5, h6': { fontFamily: theme('fontFamily.roboto') },
        h1: {
          fontSize: theme('fontSize.4xl'),
          lineHeight: theme('lineHeight.10'),
        },
        h2: {
          fontSize: theme('fontSize.3xl'),
          lineHeight: theme('lineHeight.9'),
        },
        h3: {
          fontSize: theme('fontSize.xl'),
          lineHeight: theme('lineHeight.7'),
        },
        h4: {
          fontSize: theme('fontSize.lg'),
          lineHeight: theme('lineHeight.7'),
        },
        p: {
          lineHeight: theme('lineHeight.6'),
        },
      });
    }),
  ],
};
