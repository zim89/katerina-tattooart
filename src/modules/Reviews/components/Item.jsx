import { useEffect, useState } from 'react';
import Image from 'next/image';

import clsx from 'clsx';
import styles from '../styles/item.module.css';

const ReviewItem = ({ style, review }) => {
  const [isTruncateText, setIsTruncateText] = useState(true);

  useEffect(() => {
    setIsTruncateText(true);
  }, [review]);

  const showTruncateText = () => {
    setIsTruncateText(!isTruncateText);
  };

  return (
    <div className={clsx(style, styles.wrap)}>
      <div className={styles.avaThumb}>
        <Image src={review.avatarUri} fill alt='User avatar' />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.username}>{review.username}</span>
          <span className={styles.createdAt}>{review.createdAt}</span>
        </div>
        <button type='button' onClick={showTruncateText}>
          <div className={clsx(styles.textWrap, !isTruncateText && '!h-auto')}>
            <p
              className={clsx(
                styles.text,
                !isTruncateText && '!line-clamp-none'
              )}
            >
              {review.body}
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
