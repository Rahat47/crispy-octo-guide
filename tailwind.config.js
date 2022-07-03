/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "lulo",
        secondary: "font-family: 'Roboto', sans-serif",
      },
      colors: {
        primary: "#ffbecc",
        border: "#5ce7d5",
        box: "#5ce7d5",
        "custom-blue": "#bcd42c",
      },
      content: {
        left: "url('assets/images/about/left.png')",
        right: "url('assets/images/about/right.png')",
        mark: "url('assets/images/about/important.gif')",
        tree: "url('assets/images/home/tree.png')",
        water: "url('assets/images/home/water.gif')",
      },
    },
  },
  plugins: [],
};
