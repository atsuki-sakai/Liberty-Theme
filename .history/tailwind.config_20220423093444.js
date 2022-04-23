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
        press2D: ['"Press Start 2P"'],// スペースがある物は""で再度囲む
        oswald: ["Oswold"],
        // zen_maru_gothic: ['"Zen Maru Gothic"'],
        // permanent_marker: ['"Permanent Marker"'],
        // abril_fatface: ['"Permanent Marker"']
      }
    },
  },
  plugins: [],
}
