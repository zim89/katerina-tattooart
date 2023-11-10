'use client';
import useScreenSize from '@/hooks/useScreenSize';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import ReviewItem from './components/Item';
import ReviewModal from './components/ReviewModal';
import { reviews } from './mock/reviews';
import styles from './styles/reviews.module.css';

const Reviews = () => {
  const [total, setTotal] = useState(reviews.length);
  const [limit, setLimit] = useState(1);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const screen = useScreenSize();

  useEffect(() => {
    if (screen.width >= 768) {
      setLimit(4);
    }
    if (screen.width >= 1280) {
      setLimit(6);
    }
  }, [screen]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleNext = () => {
    if (page === total) {
      setPage(1);
      return;
    }
    setPage(page + 1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className={styles.reviews} id='reviews'>
        <div className={styles.divider}></div>
        <div className='container'>
          <div className={styles.wrap}>
            <h2 className={clsx('caption', styles.title)}>Відгуки</h2>

            <ReviewItem review={reviews[page - 1]} style={styles.reviewItem} />

            <div className={styles.list}>
              {reviews.slice(0, limit * page).map((item) => (
                <ReviewItem review={item} key={item.id} />
              ))}
            </div>

            {/* Next BUTTON */}
            <button
              type='button'
              className={styles.nextBtn}
              onClick={handleNext}
            >
              <ChevronDoubleRightIcon className={styles.nextBtnIcon} />
            </button>

            {/* Load More BUTTON */}
            {page * limit < total && (
              <button
                type='button'
                className={clsx(styles.btn, styles.btnLoadMore)}
                onClick={handleLoadMore}
              >
                Показати ще
              </button>
            )}

            {/* Create review BUTTON */}
            <button
              type='button'
              className={clsx(styles.btn, styles.btnAddReview)}
              onClick={openModal}
            >
              Додати відгук
            </button>
          </div>
        </div>
      </div>

      {isOpen && <ReviewModal closeModal={closeModal} />}
    </>
  );
};

export default Reviews;
