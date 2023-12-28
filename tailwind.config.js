/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#40486d',
        orange: '#ff6b01',
        softOrange: '#f4dfd0',
        green: '#3ace86',
        softGreenicon: '#3bce87',
        softGreen: '#b2ebd0',
        superSoftGreen: '#edfaef',
        yellow: '#fdc20b',
        softYellow: '#fff1e7',
        superSoftYellow: '#fff6da',
        darkBlue: '#137aff',
        blue: '#6cadfe',
        superSoftBlue: '#eff6ff',
        softPink: '#f1dee3',
      },
      height: {
        noti: '17px',
        hero: '480px',
        home: '400px',
        hotCollection: '95%',
      },
      width: {
        hero: '100%',
        hotCollection: '340px',
        search: '60%',
        imgSummer: '68%'
      },
      maxWidth: {
        'layout': '1300px',
      },
      fontSize: {
        'placeSearch': '10px',
        'cartNumber': '8px',
        "check": '8px',
        'textExplore': '9px'
      },
      textUnderlineOffset: {
        'link': '16px'
      },
      letterSpacing: {
        'title': '5px'
      },


      screens: {

        'lg': { 'max': '1215px' },
        'md': { 'max': '1024px' },
        'sm': { 'max': '865px' },
        'xs': { 'max': '684px' },
      }

    },
  },
  plugins: [],
}