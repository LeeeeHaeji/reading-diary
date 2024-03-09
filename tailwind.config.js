/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
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
      backgroundImage: {
        "custom-gradient": "linear-gradient(to top, #ADBC9F 50%, transparent 50%)",
        "custom-gradient-white": "linear-gradient(to top, #fff 50%, transparent 50%)",
      },
      boxShadow: {
        inner: "inset 0 0 0 2px #faba10",
        white: "0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 -2px 6px 1px rgba(255, 255, 255, 0.06)",
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
