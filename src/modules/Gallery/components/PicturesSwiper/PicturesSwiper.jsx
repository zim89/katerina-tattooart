'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation } from 'swiper/modules';
import { splitArray } from '@/helpers';
import 'swiper/css';
import styles from './PicturesSwiper.module.css';

const PicturesSwiper = ({ images = [] }) => {
  return (
    <div className='lg:bg-gallery-lg flex h-[438px] items-center rounded-xl bg-[#c3c3c3] bg-gallery-sm bg-cover bg-no-repeat md:bg-gallery-md xl:h-[814px] xl:rounded-[20px]'>
      <Swiper
        centeredSlides
        observer
        observeParents
        navigation
        breakpoints={{
          768: {
            creativeEffect: {
              prev: {
                scale: 1,
                opacity: 0,
                translate: [0, 0, 0],
              },
              next: {
                scale: 1,
                opacity: 0,
                translate: [0, 0, 0],
              },
            },
            spaceBetween: 0,
            allowTouchMove: false,
          },
        }}
        slidesPerView='auto'
        spaceBetween={16}
        effect='creative'
        creativeEffect={{
          prev: {
            scale: 0.4,
            translate: [-190, 0, 0],
          },
          next: {
            scale: 0.4,
            translate: [190, 0, 0],
          },
        }}
        modules={[EffectCreative, Navigation]}
        className={`w-full ${styles.swiper}`}
        wrapperClass='md:!translate-x-0'
      >
        {splitArray(images).map((images, i) => (
          <div key={i} className='!flex flex-col justify-center'>
            {images.map((image) => (
              <SwiperSlide
                key={image.id}
                className='!flex w-[250px] md:!hidden'
              >
                <Image
                  alt={image.alt ?? 'Тату'}
                  src={image.url}
                  sizes='250px'
                  width={image.width}
                  height={image.height}
                  className='h-[313px] w-[250px] rounded-2lg border-[.597px] border-secondary bg-white/14 object-cover'
                />
              </SwiperSlide>
            ))}

            <SwiperSlide
              key={i}
              className='!hidden !transition-opacity !duration-500 md:!block'
            >
              <ul className='grid-cols-3 grid-rows-2 gap-y-14 first:row-span-2 md:grid'>
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
                      className='h-[151px] w-[158px] rounded-lg border-[.478px] border-secondary bg-white/14 object-cover group-first:h-[250px] group-first:w-[229px] xl:h-[281px] xl:w-[294px] xl:rounded-[14.222px] xl:border-[.889px] xl:group-first:h-[465px] xl:group-first:w-[428px]'
                    />
                  </li>
                ))}
              </ul>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default PicturesSwiper;
