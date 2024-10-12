/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        text: ['Angkor'],
        text1:['Bebas Neue'],
        cursive: ['Pacifico', 'cursive'],
        
      },
      fontSize: {
        'xxl': '2.5rem', 
        
      },
      screens: {
        
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
          
      },
      
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke-white': {
          '-webkit-text-stroke': '1px white',
          'color': 'transparent',
        },
      });
    },
  ],
};
