/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight:{
        11: '64px',
      },
      width:{
        97: '700px'
      }
    },
  },
  plugins: [],
}

