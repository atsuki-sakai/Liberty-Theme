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
  purge: [
    "./layout/*.liquid",
    "./templates/*.{liquid, json}",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./assets/*.{liquid, js}",
  ],
  theme: {
    extend: {
      height: {
        '94': '22rem'
      },
      fontFamily: {
        press2D: ['"Press Start 2P"'],
        oswald: ["Oswold"]
      }
    },
  },
  plugins: [],
}
