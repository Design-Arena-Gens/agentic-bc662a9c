import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,md,mdx}",
    "./lib/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx,md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3f8ff",
          100: "#dceafd",
          200: "#b7d2fb",
          300: "#8cb5f7",
          400: "#6194f1",
          500: "#3d74ea",
          600: "#2b59cd",
          700: "#2244a3",
          800: "#1f3a84",
          900: "#1f326c"
        }
      }
    }
  },
  plugins: []
};

export default config;
