'use client';
import { useEffect, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import clsx from 'clsx';

import { formatDate } from '@/helpers';
import styles from '../styles/ReviewItem.module.css';

const ReviewItem = ({ review }) => {
  const [isTruncateText, setIsTruncateText] = useState(true);
  const [height, setHeight] = useState(68);

  // useEffect(() => {
  // setIsTruncateText(true);
  // setHeight(68);
  // }, [review]);

  const showTruncateText = () => {
    if (review.review.length < 90) return;

    setHeight(height === 'auto' ? 68 : 'auto');
    setIsTruncateText((prev) => !prev);
  };

  return (
    <div className='flex flex-nowrap gap-4 xl:gap-2'>
      <div className='h-10 w-10 flex-none xl:h-15 xl:w-15'>
        <span className='flex h-full w-full items-center justify-center rounded-full border border-white bg-transparent text-xl font-medium md:text-2xl xl:text-4xl'>
          {review.name[0].toUpperCase()}
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
          aria-expanded={height !== 68}
          aria-controls='review-text'
          onClick={showTruncateText}
          type='button'
        >
          <AnimateHeight
            id='review-text'
            duration={500}
            height={height}
            className={clsx(
              isTruncateText ? styles.truncate : null,
              styles.text
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
