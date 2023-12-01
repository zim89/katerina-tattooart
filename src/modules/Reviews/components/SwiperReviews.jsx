'use client';
import { useState, useRef } from 'react';
import { Transition } from '@headlessui/react';
import {
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
} from '@heroicons/react/24/outline';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import ReviewItem from './ReviewItem';

const SwiperReviews = ({ reviews }) => {
  const [isShowingNextBtn, setIsShowingNextBtn] = useState(true);
  const [isShowingPrevBtn, setIsShowingPrevBtn] = useState(false);
  const swiperRef = useRef();

  const onSlideChange = () => {
    console.log(swiperRef);
    swiperRef.current.isBeginning
      ? setIsShowingPrevBtn(false)
      : setIsShowingPrevBtn(true);

    swiperRef.current.isEnd
      ? setIsShowingNextBtn(false)
      : setIsShowingNextBtn(true);
  };

  return (
    <>
      {reviews.length > 0 && (
        <Swiper
          spaceBetween={16}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={onSlideChange}
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id} className='h-auto'>
              <ReviewItem review={item} swiper={swiperRef.current} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div className='mt-3 flex justify-between'>
        <Transition
          show={isShowingPrevBtn}
          enter='transition-opacity duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <button
            className=''
            onClick={() => swiperRef.current.slidePrev()}
            type='button'
          >
            <ChevronDoubleLeftIcon className='h-8 w-10 text-white opacity-[0.14] transition-opacity duration-200 ease-linear hover:opacity-100' />
          </button>
        </Transition>

        <span></span>
        <Transition
          show={isShowingNextBtn}
          enter='transition-opacity duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <button
            className=''
            onClick={() => swiperRef.current.slideNext()}
            type='button'
          >
            <ChevronDoubleRightIcon className='h-8 w-10 text-white opacity-[0.14] transition-opacity duration-200 ease-linear hover:opacity-100' />
          </button>
        </Transition>
      </div>
    </>
  );
};

export default SwiperReviews;
