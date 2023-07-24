// npx tailwindcss init confShaurya --full
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      spacing: {
        13: '3.25rem'
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '1.5' }],
      }
    },
  },
  plugins: [],
}

