/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg"],
  theme: {
    screens: {
      'xxl': { 'max': '1344px' },
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '640px' },
    },
    colors: {
      primary: '#222222',
      secondary: '#666666',
      orange: '#EA5D3F',
      gray: '#909090',
      black: '#000',
      white: '#fff',
      blue: {
        dark: '#131E3D',
        mid: '#001741',
        light: '#4888FB'
      }
    },
    container: {
      center: true,
      margin: 'auto',
      padding: '2rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1344px',
      }
    },
  },
  plugins: [],
}