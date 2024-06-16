/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
