/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'homeImg' : "url('/src/assets/bgimage.png')",
      }
    },
  },
  plugins: [],
}