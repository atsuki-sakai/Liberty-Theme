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
        montserrat_italic: ['Montserrat'],
        montserrat_bold: ['Montserrat'],
        noto_sans_jp_italic: ['"Noto Serif JP"'],
        noto_serif_jp_bold: ['"Noto Sans JP"'],
        bebas:['"Bebas Neue"'],
        rubik: ['"Rubik Mono One"']
      }
    },
  },
  plugins: [],
}
