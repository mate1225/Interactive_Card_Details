/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DeepViolet: "#21092F",
        PurplishGrey: "#8F8694",
        Red: "#FF5050",
        Gradient: "#6348FE",
        LightGrey: "#DFDEE0",
      },
    },
  },
  plugins: [],
};
