'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import useResize from '@/hooks/useResize';
import clsx from 'clsx';

const imagesMobile = [
  '/images/gallery/mobile/pic-1.png',
  '/images/gallery/mobile/pic-2.png',
  '/images/gallery/mobile/pic-3.png',
  '/images/gallery/mobile/pic-4.png',
  '/images/gallery/mobile/pic-5.png',
];

const imagesTablet = [
  '/images/gallery/tablet/pic-1.png',
  '/images/gallery/tablet/pic-2.png',
  '/images/gallery/tablet/pic-3.png',
  '/images/gallery/tablet/pic-4.png',
  '/images/gallery/tablet/pic-5.png',
];

const imagesDesktop = [
  '/images/gallery/desktop/pic-1.png',
  '/images/gallery/desktop/pic-2.png',
  '/images/gallery/desktop/pic-3.png',
  '/images/gallery/desktop/pic-4.png',
  '/images/gallery/desktop/pic-5.png',
];

const PicturesSwiper = () => {
  const { isScreenMobile, isScreenDesktop } = useResize();
  return (
    <div className='md:bg-gallery-md lg:bg-gallery-lg md flex h-[438px] items-center rounded-xl bg-[#c3c3c3] bg-gallery-sm bg-cover bg-no-repeat lg:h-[814px]'>
      {isScreenMobile ? (
        <Swiper
          centeredSlides
          slidesPerView={1.5}
          spaceBetween={16}
          effect='creative'
          creativeEffect={{
            prev: {
              scale: 0.5,
              translate: ['-80%', 0, 0],
            },
            next: {
              scale: 0.5,
              translate: ['80%', 0, 0],
            },
          }}
          modules={[EffectCreative]}
        >
          {imagesMobile.map((url) => (
            <SwiperSlide key={url} className='!flex w-[250px]'>
              <Image
                alt='Тату'
                src={url}
                width={250}
                height={313}
                className='rounded-[10px] border-[.597px] border-secondary'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : isScreenDesktop ? (
        <ul className='grid grid-cols-3 grid-rows-2 gap-y-14 first:row-span-2'>
          {imagesTablet.map((url, i) => (
            <li
              key={url}
              className='flex items-center justify-center'
              style={{ gridArea: i === 0 && '1 / 2 / 3 / 3' }}
            >
              <Image
                alt='Тату'
                src={url}
                width={i > 0 ? 294 : 428}
                height={i > 0 ? 281 : 465}
                className='rounded-[10px] border-[.597px] border-secondary'
              />
            </li>
          ))}
        </ul>
      ) : (
        <ul className='grid grid-cols-3 grid-rows-2 gap-y-14 first:row-span-2'>
          {imagesTablet.map((url, i) => (
            <li
              key={url}
              className='flex items-center justify-center'
              style={{ gridArea: i === 0 && '1 / 2 / 3 / 3' }}
            >
              <Image
                alt='Тату'
                src={url}
                width={i > 0 ? 158 : 229}
                height={i > 0 ? 151 : 250}
                className='rounded-[10px] border-[.597px] border-secondary'
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PicturesSwiper;
