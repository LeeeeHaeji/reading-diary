/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#436850",
        point: "#ADBC9F",
        button: "#12372A",
      },
      backgroundSize: {
        "50%": "50%",
      },
      boxShadow: {
        inner: "inset 0 0 0 2px #faba10",
      },
    },
  },
  plugins: [],
};
