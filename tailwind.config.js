/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      'sm':{'max':'376px'},
    },
    container:{
      center: true,
      screens:{
        '2xl':'1920px'
      }
    },
   
    extend: {
      fontFamily:{
        nunito:['Nunito', 'sans-serif']
      },
      colors: {
        bgColor: '#356C07',
        price: '#E10000',
        hover: '#68C114'
      },
    },
  },
  plugins: [],
}
