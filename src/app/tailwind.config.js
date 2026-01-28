/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff5ff",
          100: "#e0ebff",
          200: "#c1d8ff",
          300: "#9bbefe",
          400: "#6b9cfd",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#0f1b3d",
        },
      },
    },
  },
  plugins: [],
};
