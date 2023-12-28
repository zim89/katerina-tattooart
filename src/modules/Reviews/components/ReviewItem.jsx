'use client';
import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import clsx from 'clsx';

import { formatDate } from '@/helpers';
import Image from 'next/image';

const ReviewItem = ({ review }) => {
  const [isTruncateText, setIsTruncateText] = useState(true);
  const [height, setHeight] = useState(74);

  const showTruncateText = () => {
    if (review.review.length < 90) return;

    setHeight(height === 'auto' ? 74 : 'auto');
    setIsTruncateText((prev) => !prev);
  };

  return (
    <div className='flex flex-nowrap gap-4 xl:gap-2'>
      <div className='h-10 w-10 flex-none xl:h-15 xl:w-15'>
        <span className='relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-white bg-transparent text-xl font-medium md:text-2xl xl:text-4xl'>
          {review.user_avatar ? (
            <Image src={review.user_avatar} alt='User avatar' fill />
          ) : (
            review.name[0].toUpperCase()
          )}
        </span>
      </div>

      <div className='grow pr-2.5 md:pr-0'>
        <div className='mb-[6px] flex items-end justify-between md:mb-1.75 xl:mb-2'>
          <span className='text-lg font-medium leading-normal text-gray md:text-xl xl:text-2xl'>
            {review.name}
          </span>
          <span className='font-inter text-base font-normal leading-normal text-gray xl:text-lg'>
            {formatDate(review.updated_at)}
          </span>
        </div>

        <button
          className='w-full border-b border-b-primary pb-2'
          onClick={showTruncateText}
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
  );
};

export default ReviewItem;
