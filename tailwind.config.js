/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      margin:{
        '100%': '100%',
      },
      colors: {
        primary: "#ff4800",
      }
    },
  },
  plugins: [require("daisyui")],
}

