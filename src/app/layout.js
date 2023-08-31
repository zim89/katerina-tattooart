import Header from '@/components/Header/Header';
import './globals.css';
import { Raleway, The_Nautigal } from 'next/font/google';
import Footer from '@/components/Footer/Footer';

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
export const metadata = {
  title: 'Katerina TattooArt',
  description: 'Katerina TattooArt',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${raleway.variable} ${nautigal.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
