/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","node_modules/preline/dist/*.js"],
  theme: {
    color:{
    },
    extend: {
      backgroundImage:{
      },
    },
  },
  plugins: ["require('preline/plugin')"],
}

