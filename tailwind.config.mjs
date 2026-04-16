/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-beige': '#F5E6D3',
        'brand-red': '#C41A1A',
        'brand-red-dark': '#8B1A1A',
        'brand-black': '#000000',
        'brand-white': '#FFFFFF',
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
