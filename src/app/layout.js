import Header from '@/components/Header/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Katerina TattooArt',
  description: 'Katerina TattooArt',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
