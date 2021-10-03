module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white : "#ffffff",
      gray: "#f8f9fa",
      gray_dark:"#f4f4f4",
      delivery: "#fef7ec",
      orange: "#fb6d3b",
      yellow: "#fcd661",
      purple: "#503e9d",
      purple_light: "#614c97",
      black: "#000000"
    },
    extend: {
      textOpacity: {
        '10': '0.1',
        '20': '0.2',
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '95': '0.95',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
