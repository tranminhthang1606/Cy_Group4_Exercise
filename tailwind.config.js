/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': { 'max': '376px' }
    },
    container: {
      center: true,
      screens: {
        '2xl': '1920px',
      }
    },
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        inherit: ['Nunito', 'sans-serif']
      },
      colors: {
        'bgColor': '#356C07',
        'price': '#E10000',
        'hover': '#68C114',
        'green-regal': '#365C07',
        'black1A': '#1A1A1A',
        'FA': '#FAFAFA',
        'custom-gray': '#F0F0F0',
        'green-custom': '#68C114',
        'green-grass': '#356C07',
        'green-grass-1A': '#356C071A',
        'black-grey': '#4F4F4F',
        'C4': '#C4C4C4',
        '66': "#666666",
        'F6': '#F6F6F6',
        'FF': '#FFFFFF',
        '34': '#343434',
        'EA': '#EAEAEA',
        'BD': '#BDBDBD',
        '8C': '#8C8C8C',
        
      },
      margin: {
        '28': '28rem',
        '26': '26rem',
        'mtx': '1.9rem',
        '0.7': '0.7rem',
        '0.6': '0.6rem'
      },
      padding: {
        '1.9': '1.9rem',
        '4.4': '4.4rem'
      },
      gap: {
        '4.5': '4.5px',
        '0.875': '0.875rem',
      },
      width: {
        '0.6': '0.6rem',
        '15': '3.75rem',
        '16.875': '16.875rem',
        '2.625': '2.625rem',
      },
      height: {
        '1.625': '1.625rem',
      },
      maxWidth: {
        '65': '65rem',
        '66': '66rem',
        '19': '19rem',
        '72': '72rem',
        '15': '15rem',
      },
      boxShadow: {
        'custom': '0px 0px 30.91px 0px rgba(0, 0, 0, 0.1)',
      },
      borderWidth: {
        '0.91': '0.91px',
        '1.04': '1.04px',
        '0.52': '0.52px',
      },
    },
  },
  plugins: [],
}