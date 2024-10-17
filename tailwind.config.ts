import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: "1281px", // Adjust xl to 1279px
      },
      boxShadow: {
        light: `--tw-shadow: 0 20px 25px -5px rgb(255 255 255 / 0.1), 0 8px 10px -6px rgb(255 255 255 / 0.1); /* Light shadow */
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color); /* For colored shadows */
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
`,
      },
      maxWidth: {
        list: "58.33333333%",
        about: "41.66666667%",
      },
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
        gray: {
          50: "var(--color-gray-50)",
          100: "var(--color-gray-100)",
          500: "var(--color-gray-500)",
          800: "var(--color-gray-800)",
        },
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
