/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Trebuchet MS"],
        title: ["Lato"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
