/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height: {
        '90': '90vh',
      },
      colors: {
        bgprimary: "#14131a",
        cardprimary: "#1c1b23",
        btnhighlight: "#2bd576",
        btnprimary: "#3a3942",
        btnsecondary: "#1c1b23",
        textprimary: "#8b8a91",
        textsecondary: "#79787f",
        textinfo: "#4f4f52",
        texthighlight: "#fff",
      },
      skew: {
        '30': '30deg',
      },
      zIndex: {
        '1': '1',
        '-1': '-1',
      },
      scale: {
        '80': '80',
        '60': '60',
        '70': '70'
      },
      content: {
        'webscraper': "url('./public/assets/wbescraper.gif')",
        'arrowUpIcon': 'url("../src/arrow-up-icon.svg")',
      },
    },
  },
  plugins: [],
}