/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'light-white': '#e7e7e7',
      },
    },
  },
  plugins: [],
  // corePlugins:{
  //   preflight:false,
  // }
}