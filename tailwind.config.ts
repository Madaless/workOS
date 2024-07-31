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
        'blueCP': '#0a65fc',
        'blackCP': '#000000',
        'pinkCP': '#ff49db',
        'orangeCP': '#fe4800',
      },
    },

  },

  plugins: [],
};
export default config;
