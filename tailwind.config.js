/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/*.{html,js,jsx,ts,tsx}}"],
  
  theme: {
   
      colors:{
        'primary':'#ffc221'
      },
     
    fontSize: {  
      sm:'0.8rem',
      base:'1rem',
      xl:'1.25rem' ,
      '2xl':'1.563rem',
      '3xl':'1.953rem',
      '4xl':'2.441rem',
      '5xl':'3.052rem',
    },
    
 
  extend: { }
},
   plugins: [
    require('flowbite/plugin'),
], 

content: [
  "./node_modules/flowbite/**/*.js"
]

} 


