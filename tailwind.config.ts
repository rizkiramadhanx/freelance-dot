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
        sourcesans: ["var(--font-sans-local-pro)"],
      },
      colors: {
        "red-brand": "var(--red-brand)",
      },
      gridTemplateColumns: {
        "preview-home": "4fr 2fr"
      }
    },
  },
  plugins: [],
};
export default config;
