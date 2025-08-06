/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"SF Pro Display-Regular"'],
        'display': ['"Beautique Display-Bold"'],
        'sf-bold': ['"SF Pro Display-Bold"'],
      },
    },
  },
  variants: {
    extend: {
      backdropFilter: ['responsive'],
      backdropBlur: ['responsive'],
    },
  },
  plugins: [],
};