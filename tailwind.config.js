/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Open Sans, sans-serif",
      heading: "Roboto Slab, serif",
    },
    extend: {
      colors: {
        accent: "#51C0C8",
        accentshade: "#0E737F",
        text: "#503000",
        textbtn: "#222222",
        brand: "#FFDBA5",
        brandshade: "#FFE9C8",
        brandtint: "#FFF4E3",
        wavetop: "#F5F8F5",
        wavemid: "#C2AE91",
        wavebot: "#886C47",
      },
    },
  },
  plugins: [],
};
