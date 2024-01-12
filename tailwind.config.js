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
        commontexttintlight: "#834f00",
        commontexttintdark: "#724400",
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
        nav: "linear-gradient(to right, rgba(80, 48, 0 ,0.85), rgba(80, 48, 0 ,0.85))",
        "mobile-nav":
          "linear-gradient(to right, rgba(34, 34, 34 ,0.75), rgba(34, 34, 34 ,0.75))",
        "hero-pattern":
          "linear-gradient(to right, rgba(34, 34, 34 ,0.55), rgba(34, 34, 34 ,0.55)), url('../src/assets/hero.jpg')",
        "story-pattern":
          "url('../src/assets/story-bg.png'), linear-gradient(to right, rgba(253, 233, 200), rgba(253, 233, 200))",
        "specs-pattern":
          "url('../src/assets/specs-bg-left.png'), url('../src/assets/specs-bg-right.png'), linear-gradient(to right, rgba(253, 233, 200), rgba(253, 233, 200))",
        "opening-hours":
          "linear-gradient(to right, rgba(34, 34, 34 ,0.55), rgba(34, 34, 34 ,0.55)), url('../src/assets/opening-hours.jpg')",
        "contact-us":
          "linear-gradient(to right, rgba(34, 34, 34 ,0.55), rgba(34, 34, 34 ,0.55)), url('../src/assets/barista.jpg')",
        reservation:
          "linear-gradient(to right, rgba(34, 34, 34 ,0.55), rgba(34, 34, 34 ,0.55)), url('../src/assets/table.jpg')",
        footer: "url(../src/assets/footer-bg.svg)",
        carousel:
          "url(../src/assets/carousel-bg.png), linear-gradient(to right, rgb(80, 48, 0), rgb(80, 48, 0))",
      },
      backgroundPosition: {
        specs: "left bottom, right top",
        "specs-sm": "left top, right bottom",
      },
      maxWidth: {
        sixty: "60%",
        seventy: "70%",
        "8xl": "104rem",
        "9xl": "120rem",
      },
      height: {
        screen: "100dvh",
        "half-screen": "50dvh",
        112: "28rem",
      },
      borderRadius: {
        speciality: "70px",
      },
      boxShadow: {
        carouselimg: "0 12px 24px rgba(0, 0, 0, 0.2)",
        nav: "0 12px 32px rgba(0, 0, 0, 0.05)",
        cart: "12px 0 32px rgba(0, 0, 0, 0.05)",
        accordion: "0 12px 24px rgba(0, 0, 0, 0.075)",
        "menu-inputs": "0 0 6px rgba(0, 0, 0, 0.05)",
        contact: "0 12px 24px rgba(0, 0, 0, 0.1)",
        team: "0 12px 32px rgba(0, 0, 0, 0.1)",
        reservation: "0 24px 48px rgba(0, 0, 0, 0.22)",
      },
      screens: {
        dtxl: { min: "2540px" },
        dt: { max: "1540px" },
        dtsm: { max: "1344px" },
        tablg: { max: "1200px" },
        tab: { max: "944px" },
        moblg: { max: "704px" },
        mob: { max: "544px" },
        mobsm: { max: "440px" },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
      addVariant("hover-child", "&:hover > *");
      addVariant("focus-child", "&:focus > *");
    },
  ],
};
