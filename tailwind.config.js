/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  
  
  theme: {
    extend: {
      colors: {
       "neutral-50" : "#F9F9F9",
       "neutral-200" : "#E4E4E4",
       "neutral-400" : "#A2A2A2",
       "neutral-500" : "#737373",
       "neutral-600" : "#525252",
       "neutral-700" : "#404040",
       "neutral-1000"  : "#000000",
        "red-error" : " #8B141A" ,
        "twitter-blue" : "#1D9BF0",
        "dark-blue" : "#1871CA",
           "stroke" : "#FFFFFF3D",
           "searchbar-fill" : "#212327",


       
        
      } ,
      spacing: {
        '0.9375': '0.9375rem',
        '0.625': '0.625rem',
      
      },
      width: {
        "0.10713" : "0.10713rem",
        "21.75" : "21.75rem",
        "26.625" : "26.625rem",
        '30.125': '30.125rem',
        '30.375': '30.375rem',
        '31.375': '31.375rem',
        "37.375": "37.375rem ",
        '3.5': '3.5rem',
        "32":"32rem",
      },
      height: {
        '3.440': '3.440rem',
        '0.1875': '0.1875rem',
        "0.57144" : "0.57144rem",
        "0.71431" : "0.71431rem",
        "0.92856": "0.92856rem",
        "0.42856": "0.42856rem",
        "8.3125": "8.3125rem",
        "22.1875" : "22.1875rem",
      },
      
      borderRadius: {
        "4.0625": "4.0625rem",
        "1.875" : "1.875rem",
       "6249.9375"  : "6249.9375rem"
        
      },

      fontFamily: {
        'inter': ['Inter', 'sans'], // Replace 'Inter' with the font name if different
        'chirp': ['font-chirp', 'sans'],
      },
     



    },
  },
  plugins: [],
}

