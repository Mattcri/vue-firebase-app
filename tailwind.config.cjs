/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'button': '#323acf',
        'font-color': '#313af7'
      },
    },
  },
  plugins: [],
}
