'use client';

import Image from 'next/image';
import { EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { splitArray } from '@/helpers';

import 'swiper/css';

const PicturesSwiper = ({ images = [] }) => {
  const splitImages = splitArray(images);

  return (
    <Swiper
      className='lg:bg-gallery-lg h-[438px] items-center rounded-xl bg-[#c3c3c3] bg-gallery-sm bg-cover bg-no-repeat md:flex md:bg-gallery-md xl:h-[814px]'
      direction='vertical'
    >
      {splitImages.map((images, i) => (
        <SwiperSlide className='!flex flex-col justify-center' key={i}>
          <Swiper
            creativeEffect={{
              prev: {
                scale: 0.5,
                translate: [-200, 0, 0],
              },
              next: {
                scale: 0.5,
                translate: [200, 0, 0],
              },
            }}
            className='w-full md:!hidden'
            effect='creative'
            modules={[EffectCreative]}
            slidesPerView={1.345}
            spaceBetween={16}
            centeredSlides
            observeParents
            observer
          >
            {images.map((image) => (
              <SwiperSlide className='!flex w-[250px]' key={image.id}>
                <Image
                  alt={image.alt ?? 'Тату'}
                  className='h-[313px] w-[250px] rounded-2lg border-[.597px] border-secondary object-cover'
                  height={image.height}
                  sizes='250px'
                  src={image.url}
                  width={image.width}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <ul className='hidden grid-cols-3 grid-rows-2 gap-y-14 first:row-span-2 md:grid'>
            {images.map((image, i) => (
              <li
                className='group flex items-center justify-center'
                key={image.id}
                style={{ gridArea: i === 0 && '1 / 2 / 3 / 3' }}
              >
                <Image
                  sizes={
                    i > 0
                      ? '(min-width: 1280px) 294px, 158px'
                      : '(min-width: 1280px) 428px, 229px'
                  }
                  alt={image.alt ?? 'Тату'}
                  className='h-[151px] w-[158px] rounded-lg border-[.478px] border-secondary object-cover group-first:h-[250px] group-first:w-[229px] xl:h-[281px] xl:w-[294px] xl:rounded-[14.222px] xl:border-[.889px] xl:group-first:h-[465px] xl:group-first:w-[428px]'
                  height={image.height}
                  src={image.url}
                  width={image.width}
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
