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
      screens: {
        xs: '375px',
      },
      fontFamily: {
        raleway: ['var(--font-raleway)'],
        nautigal: ['var(--font-nautigal)'],
        inter: ['var(--font-inter)'],
      },
      colors: {
        primary: '#D6D6D6',
        secondary: '#0A0F13',
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
