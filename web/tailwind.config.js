/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat-Regular', 'sans-serif'],
        'bold': ['Montserrat-Bold', 'sans-serif'],
        'semibold': ['Montserrat-SemiBold', 'sans-serif'],
        'medium': ['Montserrat-Medium', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

