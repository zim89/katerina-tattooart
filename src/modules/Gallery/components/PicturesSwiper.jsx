'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';

const images = [
  '/images/gallery/pic-1.png',
  '/images/gallery/pic-2.png',
  '/images/gallery/pic-3.png',
  '/images/gallery/pic-4.png',
  '/images/gallery/pic-5.png',
];

const PicturesSwiper = () => {
  return (
    <div className='flex h-[438px] items-center rounded-xl bg-[#c3c3c3] bg-gallery-sm bg-cover bg-no-repeat'>
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
        {images.map((url) => (
          <SwiperSlide key={url} className='w-[250px]'>
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
    </div>
  );
};

export default PicturesSwiper;
