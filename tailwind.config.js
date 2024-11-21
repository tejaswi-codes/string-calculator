/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ashGray: '#E0E0E0',
        duskGray: '#5A6C7F',
        sageGray: '#C5C8BE',
        borderGray: "#D1D9E6",
        midnightBlue: '#001F3F',
        slateBlue: '#2D465F',
        skyBlue: '#83C3F8'
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
