/** @type {import('tailwindcss').Config} */
export default {
  prefix: "",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    // fontFamily: {
    //   din: "Roboto",
    // },
    extend: {
      colors: {
        light_color: "var(--light-color)",
        dark_color: "var(--dark-color)",
      },
      // fontSize: {
      //   base: "12px",
      //   xs: "9px",
      //   sm: "10px",
      //   lg: "14px",
      // },
    },
  },
};
