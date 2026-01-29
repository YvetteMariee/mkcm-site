/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mkcm: {
          navy: "#0B1F33",
          deep: "#071221",
          slate: "#10243A",
          mist: "#1D334B",
          glow: "#3DD6C6",
          accent: "#F5B447",
        },
      },
    },
  },
  plugins: [],
};
