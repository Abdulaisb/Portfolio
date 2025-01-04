/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      height: {
        'pb' : '32rem'
      },
      width: {
        'g' : '100rem'
      }
    },
  },
  plugins: [],
}

