import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Droid Sans",
          "Helvetica Neue",
        ],
      },
      colors: {
        white: "var(--color-white)",
        gray: {
          50: "var(--color-gray-50)",
          100: "var(--color-gray-100)",
          500: "var(--color-gray-500)",
          800: "var(--color-gray-800)",
        },
        black: "var(--color-black)",
        pink: {
          500: "var(--color-pink-500)",
          600: "var(--color-pink-600)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
