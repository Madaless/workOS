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
        'blueCP': '#3b84fd',
        'blackCP': '#2D2D2D',
        'pinkCP': '#ff49db',
        'orangeCP': '#fe4800',
        'goldCP': '#c8aa6e',
        'bluebCP': '#0D3B66',
        'bluemCP': '#1a4b78',

      },
    },

  },

  plugins: [],
};
export default config;
