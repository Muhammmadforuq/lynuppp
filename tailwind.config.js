/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'HelveticaNeue': ['Helvetica Neue', 'monospace'],
        'founder-gro': ['Founders Grotesk', 'monospace'],
        'inter': ['Inter', 'monospace'],
      },

      colors:{
        brand:{
          purple:'#EC4B6F',
          black:'#1F1F1F',
          gray:'#717684',
          skyBlue:'#F2F3F5',
        }
      },
      maxWidth:{
        '90rem':'90rem'
      },
      borderRadius:{
        100:"6.25rem"
      }
    },
  },
  plugins: [],
}
// color: ;

// 