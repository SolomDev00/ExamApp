/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/tailwind.css',
    './public/app.css',
    './landing.html',
    './index.html',
  ],
  theme: {
      extend: {
        maxWidth: {
          '1/2': '85px',
        },
        minWidth: {
          '1/2': '900px',
        },
        minHeight: {
          '1/2': '120px',
        },
      }
  },
  plugins: [],
}