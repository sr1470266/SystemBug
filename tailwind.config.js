/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#07111f',
          900: '#0b1829',
          800: '#10243e',
          700: '#173357',
        },
        brand: {
          blue: '#0284c7',
          'blue-dark': '#0369a1',
          red: '#dc2626',
          'red-dark': '#b91c1c',
        },
      },
    },
  },
  plugins: [],
}
