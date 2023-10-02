/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      scale: {
        '-100': '-1'
    },
      
  backgroundImage: {
        'Search': "url('\isearch-30.png')",
        'aa':   "linear-gradient( 111.4deg,  rgba(238,113,113,1) 1%, rgba(246,215,148,1) 58% )",
         
    },
    backgroundColor:{
      'nav': '#4158D0'
  }
  
  },
  
  
  plugins: [],
}
}
