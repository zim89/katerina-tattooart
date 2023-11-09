/** @type {import("tailwindcss").Config} */
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
      fontSize: {
        '2.5xl': '2rem',
        '4.5xl': '2.5rem',
      },
      colors: {
        primary: '#d6d6d6',
        secondary: '#0a0f13',
        time: '#393e41',
        gray: '#e0e0e0',
        'light-gray': '#ececec',
        'dark-slate': '#2c3134',
        'brand-red': '#ff3b30',
        'brand-blue': '#4355fa',
      },
      borderWidth: {
        0.5: '.25px',
        1: '.5px',
        1.5: '1.5px',
      },
      borderRadius: {
        '2lg': '10px',
      },
      spacing: {
        px: '1px',
        1.1: '.3125rem',
        1.75: '.4375rem',
        2.1: '.5625rem',
        2.75: '.6875rem',
        3.75: '.9375rem',
        4.5: '1.125rem',
        5.5: '1.375rem',
        6.5: '1.625rem',
        7.5: '1.875rem',
        9.5: '2.375rem',
        15: '3.75rem',
        16.5: '4.0625rem',
      },
      opacity: {
        14: '.14',
      },
      lineHeight: {
        3.5: '.875rem',
        5.1: '1.3125rem',
      },
      backgroundImage: {
        'hero-sm': 'url(/images/hero/bg-mobile.png)',
        'hero-md': 'url(/images/hero/bg-tablet.png)',
        'hero-lg': 'url(/images/hero/bg-desktop.png)',
        'gallery-sm': 'url(/images/gallery/bg-mobile.svg)',
        'gallery-md': 'url(/images/gallery/bg-tablet.svg)',
        'gallery-lg': 'url(/images/gallery/bg-desktop.svg)',
        'price-sm': 'url(/images/price/bg-mobile.png)',
        'price-md': 'url(/images/price/bg-tablet.png)',
        'price-lg': 'url(/images/price/bg-desktop.png)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
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
  plugins: [require('tailwindcss-animate')],
};
