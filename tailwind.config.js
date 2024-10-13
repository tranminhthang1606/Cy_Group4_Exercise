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
        'custom-green': '#356C07',
        'custom-color': '#2D3E50',
        'custom-gray1': '#343434',
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
        '336': '336px', // thêm chiều rộng 341px
        '60': '60px', 
        '570': '570px',
        '38': '38px',
        '17': '17px',
        '700': '700px',
        '30': '30px',
        '600': '600px',
        '72': '72px',
        '300': '300px',
        '9': '9px',
        '217': '217px',
        '190': '190px',
        '17': '17px',
        'custom-width': '116.411px',
        'custom-164': '164.583px',
      },
      height: {
        '1.625': '1.625rem',
        '60': '60px',
        '298': '298px',
        '38': '38px',
        '5': '5px',
        '17': '17px',
        'custom-height': '72.917px',
        'custom-0.521': '0.521px'
      },
      maxWidth: {
        '65': '65rem',
        '66': '66rem',
        '19': '19rem',
        '72': '72rem',
        '15': '15rem',
        '1170': '1170px', // Thêm giá trị max-width 1150px
        '1920': '1920px', 
        '300': '300px',
        '570': '570px',
      },
      boxShadow: {
        'custom': '0px 0px 30.91px 0px rgba(0, 0, 0, 0.1)',
      },
      borderWidth: {
        '0.91': '0.91px',
        '1.04': '1.04px',
        '0.52': '0.52px',
      },
      backgroundColor: {
        'custom-green': '#356C07', // Thêm màu nền tùy chỉnh
        'custom-bg': '#1877F2',
        'custom-rgba': 'rgba(53, 108, 7, 0.10)',
        'custom-ea': '#EAEAEA',
        'custom-68': '#68C114'
        
      },
    },
  },
  plugins: [],
}

// module.exports = {
//   content: ['./src/**/*.html', './src/**/*.scss'],
//   theme: {
//     extend: {
//       width: {
//         '336': '336px', // thêm chiều rộng 341px
//         '60': '60px', 
//         '570': '570px',
//         '38': '38px',
//         '17': '17px',
//         '700': '700px',
//         '30': '30px',
//         '600': '600px',
//         '72': '72px',
//         '300': '300px',
//         '9': '9px',
//         '217': '217px',
//         '190': '190px',
//         '17': '17px',
//         'custom-width': '116.411px',
//         'custom-164': '164.583px',
//       },

//       maxWidth: {
//         '1170': '1170px', // Thêm giá trị max-width 1150px
//         '1920': '1920px', 
//         '300': '300px',
//         '570': '570px',
//       },

//       height:{
//         '60': '60px',
//         '298': '298px',
//         '38': '38px',
//         '5': '5px',
//         '17': '17px',
//         'custom-height': '72.917px',
//         'custom-0.521': '0.521px'
//       },

//       fontFamily: {
//         nunito: ['Nunito', 'sans-serif'],
//         dancing: ['Dancing Script', 'cursive'],
//       },

//       colors: {
//         'custom-green': '#356C07',
//         'custom-color': '#2D3E50',
//         'custom-gray': '#343434',
//       },

//       backgroundColor: {
//         'custom-green': '#356C07', // Thêm màu nền tùy chỉnh
//         'custom-bg': '#1877F2',
//         'custom-rgba': 'rgba(53, 108, 7, 0.10)',
//         'custom-ea': '#EAEAEA',
//         'custom-68': '#68C114'
        
//       },

//       borderWidth: {
//         'custom': '1.042px',
//       },
//       borderColor: {
//         'custom-rgba': 'rgba(53, 108, 7, 0.10)',
//         'black-opacity': 'rgba(0, 0, 0, 0.30)',
//       },

//       fontSize: {
//         'custom-size': '16.667px',
//         '21': '21px',
//         '16px': '16px', 
//       },

//       borderRadius: {
//         'custom-radius': '3px',
//         'custom-10': '10.417px'
//       },

//       lineHeight: {
//         '141': '1.411', // Tùy chỉnh line-height (141.1% = 1.411)
//       },

//       screens: {
//         'sm': { 'max': '376px' },   // Màn hình nhỏ hơn 640px
//         },
//     },
//   },
//   plugins: [],
// }
