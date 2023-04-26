/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        main_color:"#4E0F8A",
        black:"#000000",
        white:"#fff",
        gray_light:"#F4F5F7",
        gray_form:"#ECF0F3",
        gray_input:"#E4E7EB",
      }
    },
    screens:{
      xs:"320px",
      sm:"414px",
      md:"768px",
      lg:"1024px",
      xl:"1440px"
    },
    container:{
      center:true,
      padding: {
        xs:"0.625rem",
        sm:"1rem",
        md:"1.25rem",
        lg:"1.875rem",
        xl:"1.875rem",
      },
      screens:{
        xl:"1200px"
      }
    },
  },
  plugins: [],
}

