/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./index.html" // Pastikan index.html juga di-scan
  ],
  theme: {
    extend: {
      // Menambahkan font kustom di sini
      fontFamily: {
        'sans': ['"SF Pro Display-Regular"'],
        'display': ['"Beautique Display-Bold"'],
        'sf-bold': ['"SF Pro Display-Bold"'],
      },
    },
  },
  plugins: [],
};