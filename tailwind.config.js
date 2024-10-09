/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Roboto"],
      },
      colors: {
        banner: "#f4f3f0",
        pop: "#ebecf0",
      },
    },
  },
  plugins: [],
};
