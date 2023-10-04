import { Raleway, The_Nautigal, Inter } from 'next/font/google';

import Header from '@/modules/Header';
import Footer from '@/modules/Footer';

import './globals.css';

const raleway = Raleway({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
});

const nautigal = The_Nautigal({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nautigal',
});

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Katerina TattooArt',
  description: 'Katerina TattooArt',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${raleway.variable} ${nautigal.variable} ${inter.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
