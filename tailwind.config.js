/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html',   // Include your HTML files
    './src/**/*.{html,js}',],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    // container: {
    //   center: true,
    //   padding: '2rem'
    // },
    extend: {
      colors: {
        brightRed: 'hsl(12,88%,59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
      spacing: {
        '38': '9.5rem',  // Adding 9.5rem as custom spacing
      }
    },
  },
  plugins: [],
}

