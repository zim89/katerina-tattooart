'use client';
import React, { useRef, useState } from 'react';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';
import { Transition } from '@headlessui/react';
import AnimateHeight from 'react-animate-height';
import clsx from 'clsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { formatDate } from '@/helpers';
import Image from 'next/image';

export const SwiperReviews = ({ reviews }) => {
  const [isShowingNextBtn, setIsShowingNextBtn] = useState(true);
  const [isShowingPrevBtn, setIsShowingPrevBtn] = useState(false);
  const [isTruncateText, setIsTruncateText] = useState(true);
  const [height, setHeight] = useState(68);
  const swiperRef = useRef();

  const showTruncateText = (review) => {
    if (review.length < 90) return;

    setHeight(height === 'auto' ? 68 : 'auto');
    setIsTruncateText((prev) => !prev);
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setHeight(68);
      setIsTruncateText(true);
    },
    afterChange: (index) => {
      index === 0 ? setIsShowingPrevBtn(false) : setIsShowingPrevBtn(true);
      index === reviews.length - 1
        ? setIsShowingNextBtn(false)
        : setIsShowingNextBtn(true);
    },
  };

  return (
    <>
      {reviews.length > 0 && (
        <Slider ref={(swiper) => (swiperRef.current = swiper)} {...settings}>
          {reviews.map((review) => (
            <div key={review.id}>
              <div className='flex flex-nowrap gap-4 '>
                <div className='h-10 w-10 flex-none'>
                  {review.user_avatar ? (
                    <Image
                      src={review.user_avatar}
                      alt='User avatar'
                      width={40}
                      height={40}
                      className='overflow-hidden rounded-full'
                    />
                  ) : (
                    <span className='flex h-full w-full items-center justify-center rounded-full border border-white bg-transparent text-xl font-medium'>
                      {review.name[0].toUpperCase()}
                    </span>
                  )}
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
                        'text-left text-base leading-[21.824px] text-primary md:text-lg md:leading-[24.552px]'
                      )}
                    >
                      {review.review}
                    </AnimateHeight>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
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
            onClick={() => swiperRef.current.slickPrev()}
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
            onClick={() => swiperRef.current.slickNext()}
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
