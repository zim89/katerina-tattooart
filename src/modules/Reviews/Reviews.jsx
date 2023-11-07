'use client';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';

import ReviewItem from './components/Item';
import ReviewModal from './components/Modal';
import useScreenSize from '@/hooks/useScreenSize';

import styles from './styles/reviews.module.css';
import { reviews } from './mock/reviews';

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

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
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
              onClick={handleOpenModal}
            >
              Додати відгук
            </button>
          </div>
        </div>
      </div>

      {isOpen && <ReviewModal showModal={handleOpenModal} />}
    </>
  );
};

export default Reviews;
