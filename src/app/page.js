import { ToastContainer } from 'react-toastify';

import Contacts from '@/modules/Contacts';
import Features from '@/modules/Features';
import Gallery from '@/modules/Gallery';
import Hero from '@/modules/Hero';
import Price from '@/modules/Price';
import Reviews from '@/modules/Reviews';
import TodoForm from '@/modules/Reviews/Test';

export default function Home({ searchParams: { filter } }) {
  return (
    <>
      <Hero />
      <Features />
      <Gallery filter={filter} />
      <Price />
      <Reviews />
      <TodoForm />
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
    </>
  );
}
