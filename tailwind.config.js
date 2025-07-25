/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/onborda/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}