/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#367B5D',
        'secondary': '#7A7A7A',
        'tertiary': '#AFAFAF',
        'quaternary': '#CECECE',
        'black': '#242424',
        'white': '#FDFDFD',
        'base': '#393737',
      },
      fontSize: {
        'h1': ['58px', { fontWeight: '800' }],
        'h2': ['42px', { fontWeight: '600' }],
        'h3': ['21px', { fontWeight: '600' }],
        'h4': ['20px'],
        'h5': ['14px'],
        'p': ['10px'],
        'p-medium': ['12px', { fontWeight: '600' }],
        's': ['6px'],
      },
    },
  },
  plugins: [],
} 