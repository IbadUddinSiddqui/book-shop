import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#63fc58',   // Background color
        secondary: '#28fc19', // Foreground (text) color
        brandAccent: '#f97316', // Accent color (optional)
      },
    },
  },
  plugins: [],
} satisfies Config;
