import { Raleway, The_Nautigal, Inter } from 'next/font/google';

import Header from '@/modules/Header';
import Footer from '@/modules/Footer';

import './globals.css';

const raleway = Raleway({
  subsets: ['latin', 'cyrillic'],
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
        <main className='mt-[3.9375rem] md:mt-[4.4375rem] xl:mt-[6.25rem]'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
