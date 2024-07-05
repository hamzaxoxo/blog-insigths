/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      "1xl": { min: "1400px" },
      // => @media (min-width: 1279px) { ... }
      xl: { min: "1279px" },
      // => @media (min-width: 1279px) { ... }

      lg2: { min: "1200px" },
      // => @media (min-width: 1120px) { ... }

      lg: { min: "1023px" },
      // => @media (min-width: 1023px) { ... }

      md0: { min: "900px" },
      // => @media (min-width: 900px) { ... }

      md: { min: "767px" },
      // => @media (min-width: 767px) { ... }

      sm2: { min: "659px" },
      // => @media (min-width: 659px) { ... }

      sm: { min: "639px" },
      // => @media (min-width: 639px) { ... }

      ssms: { min: "500px" },
      // => @media (min-width: 500px) { ... }

      ssm: { min: "460px" },
      // => @media (min-width: 460px) { ... }

      ssmm: { min: "400px" },
      // => @media (min-width: 460px) { ... }
    },
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      colors: {
        primary: "#111827",
      },
    },
  },
  plugins: [],
};
