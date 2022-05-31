module.exports = {
  mode: "jit",
  content: [
    "./assets/*.{liquid, js",
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.{liquid, json}",
    ".templates/customers/*.{liquid, json}",
  ],
  theme: {
    extend: {
      height: {
        '94': '22rem'
      },
      fontFamily: {
     
      }
    },
  },
  plugins: [],
}
