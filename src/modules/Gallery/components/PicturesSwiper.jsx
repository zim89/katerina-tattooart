'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import useResize from '@/hooks/useResize';

const PicturesSwiper = ({ images = [] }) => {
  // FIXME: useResize does not work on initial load
  const { isScreenMobile } = useResize();
  return (
    <div className='md flex h-[438px] items-center rounded-xl bg-[#c3c3c3] bg-gallery-sm bg-cover bg-no-repeat md:bg-gallery-md lg:bg-gallery-lg xl:h-[814px]'>
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
          className='w-full'
        >
          {images.map((image) => (
            <SwiperSlide key={image.src} className='!flex w-[250px]'>
              <Image
                alt='Тату'
                src={image}
                sizes='250px'
                className='h-[313px] w-[250px] rounded-[10px] border-[.597px] border-secondary object-cover'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <ul className='grid grid-cols-3 grid-rows-2 gap-y-14 first:row-span-2'>
          {images.map((image, i) => (
            <li
              key={image.src}
              className='group flex items-center justify-center'
              style={{ gridArea: i === 0 && '1 / 2 / 3 / 3' }}
            >
              <Image
                alt='Тату'
                src={image}
                sizes={
                  i > 0
                    ? '(min-width: 1280px) 294px, 158px'
                    : '(min-width: 1280px) 428px, 229px'
                }
                className='h-[151px] w-[158px] rounded-lg border-[.478px] border-secondary object-cover group-first:h-[250px] group-first:w-[229px] xl:h-[281px] xl:w-[294px] xl:rounded-[14.222px] xl:border-[.889px] xl:group-first:h-[465px] xl:group-first:w-[428px]'
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PicturesSwiper;
