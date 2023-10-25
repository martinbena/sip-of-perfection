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
        accentshadelight: "#49adb4",
        accentshadedark: "#0E737F",
        commontext: "#503000",
        btntext: "#222222",
        brand: "#FFDBA5",
        brandshade: "#FFE9C8",
        brandtint: "#FFF4E3",
        wavetop: "#F5F8F5",
        wavemid: "#C2AE91",
        wavebot: "#886C47",
        linkhover: "#FFC772",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right, rgba(34, 34, 34 ,0.55), rgba(34, 34, 34 ,0.55)), url('../src/assets/hero.jpg')",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
