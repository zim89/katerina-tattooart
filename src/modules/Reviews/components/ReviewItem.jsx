'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import clsx from 'clsx';
import styles from '../styles/item.module.css';
import { formatDate } from '@/helpers';

const colors = [
  'bg-red-400',
  'bg-teal-500',
  'bg-indigo-400',
  'bg-pink-400',
  'bg-sky-400',
];

const ReviewItem = ({ style, review }) => {
  const [isTruncateText, setIsTruncateText] = useState(true);
  const [avatarUrl, setAvatarUrl] = useState(review.user_avatar ?? null);

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
            src={avatarUrl}
            fill
            alt='User avatar'
            sizes='(max-width: 767px) 100vw, (max-width: 1279px 50vw, 33vw'
          />
        ) : (
          <span
            className={clsx(
              `flex h-full w-full items-center justify-center rounded-full ${
                colors[Math.floor(Math.random() * colors.length)]
              } text-lg font-medium xl:text-xl`
            )}
          >
            {review.name[0]}
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
        <button type='button' onClick={showTruncateText} className='w-full'>
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
