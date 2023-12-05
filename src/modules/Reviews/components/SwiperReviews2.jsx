'use client';
import { useState, useRef } from 'react';
import { Transition } from '@headlessui/react';
import {
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
} from '@heroicons/react/24/outline';
import AnimateHeight from 'react-animate-height';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { formatDate } from '@/helpers';

export const SwiperReviews2 = ({ reviews }) => {
  const [isTruncateText, setIsTruncateText] = useState(true);
  const [height, setHeight] = useState(68);
  const [isShowingNextBtn, setIsShowingNextBtn] = useState(true);
  const [isShowingPrevBtn, setIsShowingPrevBtn] = useState(false);
  const swiperRef = useRef();

  const showTruncateText = (review) => {
    if (review.length < 90) return;

    setHeight(height === 'auto' ? 68 : 'auto');
    setIsTruncateText((prev) => !prev);
  };

  const onSlideChange = () => {
    swiperRef.current?.isBeginning
      ? setIsShowingPrevBtn(false)
      : setIsShowingPrevBtn(true);

    swiperRef.current?.isEnd
      ? setIsShowingNextBtn(false)
      : setIsShowingNextBtn(true);
  };

  const onBeforeTransitionStart = () => {
    setHeight(68);
    setIsTruncateText(true);
  };

  return (
    <>
      {reviews.length > 0 && (
        <Swiper
          autoHeight={true}
          speed={800}
          spaceBetween={16}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={onSlideChange}
          onBeforeTransitionStart={onBeforeTransitionStart}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div>
                <div className='flex flex-nowrap gap-4'>
                  <div className='h-10 w-10 flex-none'>
                    <span className='flex h-full w-full items-center justify-center rounded-full border border-white bg-transparent text-xl font-medium'>
                      {review.name[0].toUpperCase()}
                    </span>
                  </div>

                  <div className='grow pr-2.5'>
                    <div className='mb-[6px] flex items-end justify-between'>
                      <span className='text-lg font-medium leading-normal text-gray'>
                        {review.name}
                      </span>
                      <span className='font-inter text-base font-normal leading-normal text-gray'>
                        {formatDate(review.updated_at)}
                      </span>
                    </div>

                    <button
                      className='w-full border-b border-b-primary pb-2'
                      onClick={() => showTruncateText(review.review)}
                      type='button'
                    >
                      <AnimateHeight
                        duration={500}
                        height={height}
                        className={clsx(
                          isTruncateText ? 'line-clamp-3' : null,
                          'text-left text-base leading-[21.824px] text-primary'
                        )}
                      >
                        {review.review}
                      </AnimateHeight>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
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
                onClick={() => swiperRef.current?.slidePrev()}
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
                onClick={() => swiperRef.current?.slideNext()}
                type='button'
              >
                <ChevronDoubleRightIcon className='h-8 w-10 text-white opacity-[0.14] transition-opacity duration-200 ease-linear hover:opacity-100' />
              </button>
            </Transition>
          </div>
        </Swiper>
      )}
    </>
  );
};

export default SwiperReviews2;
