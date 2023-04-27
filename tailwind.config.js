/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main_color: "#4E0F8A",
        main_color_middle: "#4E0F8A80",
        main_color_light: "#DCCFE8",
        black: "#000000",
        white: "#fff",
        gray_light: "#F4F5F7",
        gray_form: "#ECF0F3",
        gray_input: "#E4E7EB",
        gray_table: "#020000",
      },
    },
    screens: {
      xs: "320px",
      sm: "414px",
      smm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    container: {
      center: true,
      padding: {
        xs: "0.625rem",
        sm: "1rem",
        md: "1.25rem",
        lg: "1.875rem",
        xl: "1.875rem",
      },
      screens: {
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
