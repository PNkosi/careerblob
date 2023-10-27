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
        background: "var(--background)",
        "cyan-blue": "var(--cyan-blue)",
        "light-purple": "var(--light-purple)",
        "dark-purple": "var(--dark-purple)",
        "very-dark-purple": "var(--very-dark-purple)"
      },
    },
    container: {
      center: true,
      padding: '1rem'
    }
  },
  
  plugins: [],
};
export default config;
