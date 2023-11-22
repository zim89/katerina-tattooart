import { ToastContainer } from 'react-toastify';

import Contacts from '@/modules/Contacts';
import Features from '@/modules/Features';
import Gallery from '@/modules/Gallery';
import Hero from '@/modules/Hero';
import Price from '@/modules/Price';
import Reviews from '@/modules/Reviews';

export default function Home({ searchParams: { filter } }) {
  return (
    <>
      <Hero />
      <Features />
      <Gallery filter={filter} />
      <Price />
      <Reviews />
      <Contacts />

      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        position='top-right'
        rtl={false}
        theme='dark'
        closeOnClick
        draggable
        pauseOnFocusLoss
        pauseOnHover
      />
    </>
  );
}
