import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "clr-1": '#000',
        "clr-2": '#E3E1DC',
        "clr-3": '#fff',
        "clr-highlight": '#4D270C',
      },
      fontSize: {
        'font-xs': 'clamp(0.3rem, 0.10vw + 0.3rem, 0.4rem)',
        'font-sm': 'clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)',
        'font-base': 'clamp(1rem, 0.34vw + 0.91rem, 1.19rem)',
        'font-md': 'clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)',
        'font-lg': 'clamp(1.56rem, 1vw + 1.31rem, 2.11rem)',
        'font-xl': 'clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)',
        'font-2xl':' clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)',
        'font-3xl': 'clamp(3.05rem, 3.54vw + 2.17rem, 5rem)',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
