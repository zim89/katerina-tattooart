'use client';
import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import clsx from 'clsx';
import Image from 'next/image';

import { formatDate } from '@/helpers';

const ReviewItem = ({ style, review, bgColor }) => {
  const [isTruncateText, setIsTruncateText] = useState(true);
  const [height, setHeight] = useState(74);

  const showTruncateText = () => {
    if (review.review.length < 90) return;

    setHeight(height === 'auto' ? 74 : 'auto');
    setIsTruncateText((prev) => !prev);
  };

  return (
    <div className={clsx(style, styles.wrap)}>
      <div className={styles.avaThumb}>
        {avatarUrl ? (
          <Image
            alt='User avatar'
            sizes='(max-width: 767px) 100vw, (max-width: 1279px 50vw, 33vw'
            src={avatarUrl}
            fill
          />
        ) : (
          <span
            // className={clsx(
            //   `flex h-full w-full items-center justify-center rounded-full ${bgColor} text-lg font-medium xl:text-xl`
            // )}
            className='flex h-full w-full items-center justify-center rounded-full border border-white bg-transparent text-lg font-medium xl:text-xl'
          >
            {review.name[0].toUpperCase()}
          </span>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.username}>{review.name}</span>
          <span className={styles.createdAt}>
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
