'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import clsx from 'clsx';
import styles from '../styles/item.module.css';
import { formatDate, getRandomColor } from '@/helpers';

const ReviewItem = ({ style, review }) => {
  const [isTruncateText, setIsTruncateText] = useState(true);
  const [avatarUrl, setAvatarUrl] = useState(review.user_avatar);

  useEffect(() => {
    setIsTruncateText(true);
  }, [review]);

  // useEffect(() => {
  //   setAvatarUrl(review.user_avatar);
  //   console.log(avatarUrl);
  // }, [review]);

  const showTruncateText = () => {
    setIsTruncateText(!isTruncateText);
  };

  return (
    <div className={clsx(style, styles.wrap)}>
      <div
        className={clsx(
          styles.avaThumb,
          'flex items-center justify-center',
          !avatarUrl && ` bg-${getRandomColor()}`
        )}
      >
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            fill
            alt='User avatar'
            sizes='(max-width: 767px) 100vw, (max-width: 1279px 50vw, 33vw'
          />
        ) : (
          <span className='text-lg font-medium xl:text-xl'>
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
        <button type='button' onClick={showTruncateText}>
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
