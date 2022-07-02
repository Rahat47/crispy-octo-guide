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
        primary: "#ffc2f2",
        border: "#45ffc7",
        "custom-blue": "#1b8f82",
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
