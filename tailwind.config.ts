import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#f58220",
          dark: "#101418",
          slate: "#2d3640",
          light: "#f8f6f2",
        },
      },
      boxShadow: {
        soft: "0 20px 40px rgba(16, 20, 24, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
