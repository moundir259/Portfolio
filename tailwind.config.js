/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0D0C0A",
        "ink-soft": "#151310",
        ember: "#FFD400",
        "ember-soft": "#FFE566",
        danger: "#E4362A",
        "danger-soft": "#C92E24",
        teal: "#1F3B3E",
        "teal-soft": "#2C5459",
        parchment: "#F3ECDF",
        brass: "#A9895F",
        smoke: "#8A8378",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Manrope", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};
