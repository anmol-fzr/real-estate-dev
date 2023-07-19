/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary": "#CCF3A3",
        "primary": "#087040"
      },
      backgroundImage: {
        "hero-lg": "url('/hero-lg.webp')"
      }
    },
  },
  plugins: [],
}

