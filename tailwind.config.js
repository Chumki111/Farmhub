/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f4e3d',
        secondary: '#2AB939',
        third: '#fbd41f',
      },
    },
  },
  plugins: [],
}

