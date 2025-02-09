/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mavani-blue': '#2C5282',
        'mavani-light-blue': '#4299E1',
        'mavani-gray': '#718096'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
