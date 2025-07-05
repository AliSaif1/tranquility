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
          DEFAULT: '#56938e', // Teal as primary
          50: '#f2f8f7',
          100: '#d3ece9',
          200: '#a6d8d3',
          300: '#72bdb8',
          400: '#4aa19d',
          500: '#338682',
          600: '#2a6c69',
          700: '#265755',
          800: '#234746',
          900: '#213c3b',
          950: '#0e2222',
        },
        secondary: {
          DEFAULT: '#f5e4d0', // Cream as secondary
          50: '#fefcf9',
          100: '#fdf8f2',
          200: '#f5e4d0',
          300: '#efcda9',
          400: '#e5ac77',
          500: '#dc8e4f',
          600: '#d3773a',
          700: '#b05f31',
          800: '#8c4d2d',
          900: '#714027',
          950: '#3d2012',
        },
        accent: {
          DEFAULT: '#8a7d8e', // Muted lavender-gray
          50: '#f8f7f9',
          100: '#f0eef1',
          200: '#ddd8de',
          300: '#c0b7c3',
          400: '#9e91a1',
          500: '#8a7d8e',
          600: '#74677a',
          700: '#605465',
          800: '#514756',
          900: '#453d49',
          950: '#29212c',
        },
      },
    },
  },
  plugins: [],
}