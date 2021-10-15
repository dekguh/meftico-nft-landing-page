module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'navy': '#081937',
        'navy-secondary': '#0C2041',
        'navy-ascent': '#122647',
        'color-none': 'transparent',
        'pink': '#f17674',
        'purple': '#846ff4'
      },
      textColor: {
        'pink': '#f17674',
        'purple': '#846ff4'
      },
      borderColor: {
        'pink': '#f17674',
        'purple': '#846ff4'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
