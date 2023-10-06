'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import { splitArray } from '@/helpers';
import 'swiper/css';

const PicturesSwiper = ({ images = [] }) => {
  const splitImages = splitArray(images);

  return (
    <Swiper
      direction='vertical'
      className='h-[438px] items-center rounded-xl bg-[#c3c3c3] bg-gallery-sm bg-cover bg-no-repeat md:flex md:bg-gallery-md lg:bg-gallery-lg xl:h-[814px]'
    >
      {splitImages.map((images, i) => (
        <SwiperSlide key={i} className='!flex flex-col justify-center'>
          <Swiper
            centeredSlides
            observer
            observeParents
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
            className='w-full md:!hidden'
          >
            {images.map((image) => (
              <SwiperSlide key={image.id} className='!flex w-[250px]'>
                <Image
                  alt={image.alt ?? 'Тату'}
                  src={image.url}
                  sizes='250px'
                  width={image.width}
                  height={image.height}
                  className='h-[313px] w-[250px] rounded-[10px] border-[.597px] border-secondary object-cover'
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <ul className='hidden grid-cols-3 grid-rows-2 gap-y-14 first:row-span-2 md:grid'>
            {images.map((image, i) => (
              <li
                key={image.id}
                className='group flex items-center justify-center'
                style={{ gridArea: i === 0 && '1 / 2 / 3 / 3' }}
              >
                <Image
                  alt={image.alt ?? 'Тату'}
                  src={image.url}
                  sizes={
                    i > 0
                      ? '(min-width: 1280px) 294px, 158px'
                      : '(min-width: 1280px) 428px, 229px'
                  }
                  width={image.width}
                  height={image.height}
                  className='h-[151px] w-[158px] rounded-lg border-[.478px] border-secondary object-cover group-first:h-[250px] group-first:w-[229px] xl:h-[281px] xl:w-[294px] xl:rounded-[14.222px] xl:border-[.889px] xl:group-first:h-[465px] xl:group-first:w-[428px]'
                />
              </li>
            ))}
          </ul>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PicturesSwiper;
