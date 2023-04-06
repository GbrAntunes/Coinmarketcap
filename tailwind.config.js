/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['IBM Plex Mono', 'monospace'],
    },
    extend: {
      colors: {
        ascendGreen: '#16C784',
        descendRed: '#EA3943',
        coldGray: '#A7B1C2',
      }
    },
  },
  plugins: [],
}

