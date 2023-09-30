/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderColor: (theme) =>(
      {
        ...theme("color"),
        DEFAULT: theme("colors.gray.900", "currentcolor")
      }
    ),
    extend: {
      boxShadow:{
        custom: "0px 1px 1px rgba(0,0,0,0.03), 0px 3px 6px rgba(0,0,0,0.02)"
      }
    },
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1300px",
      }
    }
  },
  plugins: [],
}

