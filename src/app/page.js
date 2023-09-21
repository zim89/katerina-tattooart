import { ToastContainer } from 'react-toastify';

import Contacts from '@/modules/Contacts';
import Features from '@/modules/Features';
import Gallery from '@/modules/Gallery';
import Hero from '@/modules/Hero';
import Price from '@/modules/Price';
import Reviews from '@/modules/Reviews';

export default function Home() {
  return (
    <main className='mx-auto max-w-[1440px]'>
      <Hero />
      <Features />
      <Gallery />
      <Price />
      <Reviews />
      <Contacts />

      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </main>
  );
}
