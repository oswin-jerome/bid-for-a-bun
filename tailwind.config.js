module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', 
  './components/**/*.{js,ts,jsx,tsx}',"./components/hero.jsx","./components/feedback.jsx"],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    extend: {
      fontFamily: {
        'roboto': ['Poppins'],
     },
      colors: {
        'app': {
          '50': '#f6f9fb', 
          '100': '#edf3f6', 
          '200': '#d3e1e9', 
          '300': '#b9cfdb', 
          '400': '#84aac0', 
          '500': '#4f86a5', 
          '600': '#477995', 
          '700': '#3b657c', 
          '800': '#2f5063', 
          '900': '#274251'
      }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}
