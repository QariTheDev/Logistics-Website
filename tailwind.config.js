/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#03103D',
        orange: '#FF5E18',
        grey: '#1C1919'
      },
      fontFamily: {
        kumbh: ['Kumbh Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        noto: ['Noto Sans', 'sans-serif'],
      },
      gridTemplateColumns: {
        'custom': '60% 40%',
      }
    },
  },
  plugins: [],
}