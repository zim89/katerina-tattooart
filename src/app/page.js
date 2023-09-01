import Contacts from '@/components/Contacts/Contacts';
import Features from '@/components/Features/Features';
import Gallery from '@/components/Gallery/Gallery';
import Hero from '@/components/Hero/Hero';
import Price from '@/components/Price/Price';
import Reviews from '@/components/Reviews/Reviews';

export default function Home() {
  return (
    <main className='mx-auto max-w-[1440px]'>
      <Hero />
      <Features />
      <Gallery />
      <Price />
      <Reviews />
      <Contacts />
    </main>
  );
}
