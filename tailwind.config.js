/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-primary": "#E5E7EB",
        "light-secondary": "#D1D5DB",
        "dark-primary": "#1F2937",
        "dark-secondary": "#111827",
      },
    },
  },
  plugins: [],
};
