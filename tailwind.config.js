/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    fontFamily:{
      oswald:['Oswald','sans-serif']
    },
    keyframes:{
      move:{
        "50%":{transform:'translateY(-1rem)'}
      }
    },
    animation:{
      'movingY':'move 2s linear infinite'
    }
  },
  plugins: [],
}
