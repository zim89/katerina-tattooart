/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['var(--font-raleway)'],
        nautigal: ['var(--font-nautigal)'],
        inter: ['var(--font-inter)'],
      },
      colors: {
        primary: '#d6d6d6',
        secondary: '#0a0f13',
      },
      borderWidth: {
        0.5: '0.25px',
        1: '0.5px',
      },
      spacing: {
        3.75: '0.9375rem',
        4.5: '1.125rem',
        5.5: '1.3125rem',
      },
      opacity: {
        14: '.14',
      },
      lineHeight: {
        5.1: '1.3125rem',
      },
      backgroundImage: {
        'gallery-sm': `url(/images/gallery/bg-mobile.svg)`,
        'gallery-md': `url(/images/gallery/bg-tablet.svg)`,
        'gallery-lg': `url(/images/gallery/bg-desktop.svg)`,
      },
    },
    screens: {
      sm: '375px',
      md: '768px',
      xl: '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2.5rem',
        xl: '5rem',
      },
    },
  },
  plugins: [],
};
