/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {

      cream: '#EBD6DE',
      gray:{
        dark: '#7a3232',
        light: '#fff',
      } ,
      green: {
        DEFAULT:'#7a3232',
        dark: '#9D4040'
      } ,
      mustard: '#e9a4a4',
      red: '#F8D8C6',
      white: '#FFF',
    }
    // extend: {},
  },
  plugins: []
}
