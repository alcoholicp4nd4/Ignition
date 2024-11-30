/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff4e00',
          dark: '#1a1a1a',
          light: '#ff0000'
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #ff4e00, #ff0000)',
      }
    },
  },
  plugins: [],
}