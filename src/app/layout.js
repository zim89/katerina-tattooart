import { Inter, Raleway, The_Nautigal } from 'next/font/google';

import Header from '@/modules/Header';
import Footer from '@/modules/Footer';
import { UserContextProvider } from '@/context/userContext';

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
      <body className='pt-[62px] md:pt-[68px] xl:pt-[95px]'>
        <UserContextProvider>
          <Header />
          <main className=''>{children}</main>
          <Footer />
        </UserContextProvider>
      </body>
    </html>
  );
}
