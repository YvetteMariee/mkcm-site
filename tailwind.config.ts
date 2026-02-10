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
          orange: "#3f66ff",
          dark: "#060c1d",
          slate: "#425a8d",
          light: "#eef3ff",
        },
      },
      boxShadow: {
        soft: "0 20px 40px rgba(8, 14, 32, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
