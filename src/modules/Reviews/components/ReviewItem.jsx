'use client';
import { useEffect, useState } from 'react';

import clsx from 'clsx';
import Image from 'next/image';

import { formatDate } from '@/helpers';

import styles from '../styles/ReviewItem.module.css';

const colors = [
  'bg-red-400',
  'bg-teal-500',
  'bg-indigo-400',
  'bg-pink-400',
  'bg-sky-400',
];

const ReviewItem = ({ style, review }) => {
  const [isTruncateText, setIsTruncateText] = useState(true);
  const [avatarUrl] = useState(review.user_avatar ?? null);

  useEffect(() => {
    setIsTruncateText(true);
  }, [review]);

  const showTruncateText = () => {
    setIsTruncateText(!isTruncateText);
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
            className={clsx(
              `flex h-full w-full items-center justify-center rounded-full ${
                colors[Math.floor(Math.random() * colors.length)]
              } text-lg font-medium xl:text-xl`
            )}
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
        <button className='w-full' onClick={showTruncateText} type='button'>
          <div className={clsx(styles.textWrap, !isTruncateText && '!h-auto')}>
            <p
              className={clsx(
                styles.text,
                !isTruncateText && '!line-clamp-none'
              )}
            >
              {review.review}
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
