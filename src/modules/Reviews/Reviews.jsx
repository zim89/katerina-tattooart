'use client';
import { useEffect, useLayoutEffect, useState } from 'react';

import useScreenSize from '@/hooks/useScreenSize';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { toast } from 'react-toastify';

import { useUserContext } from '@/context/userContext';
import reviewsAPI from '@/supabase/api/review';

import ReviewItem from './components/ReviewItem';
import ReviewModal from './components/ReviewModal';

import 'react-toastify/dist/ReactToastify.min.css';

import styles from './styles/Reviews.module.css';

const Reviews = () => {
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(1);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [reviews, setReviews] = useState([]);

  const screen = useScreenSize();
  const { currentUser } = useUserContext();

  useLayoutEffect(() => {
    (async () => {
      const data = await reviewsAPI.findAll();
      setReviews(data);
      setTotal(data.length);
    })();
  }, []);

  useEffect(() => {
    if (screen.width >= 768) {
      setLimit(4);
    }
    if (screen.width >= 1280) {
      setLimit(6);
    }
  }, [screen]);

  const openModal = () => {
    if (!currentUser) {
      toast.warning('Для додавання відгуків вам потрібно авторизуватись!');
      return;
    }
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

            {reviews.length > 0 && (
              <ReviewItem
                review={reviews[page - 1]}
                style={styles.reviewItem}
              />
            )}

            {reviews.length > 0 && (
              <div className={styles.list}>
                {reviews.slice(0, limit * page).map((item) => (
                  <ReviewItem key={item.id} review={item} />
                ))}
              </div>
            )}

            {/* Next BUTTON */}
            <button
              className={styles.nextBtn}
              onClick={handleNext}
              type='button'
            >
              <ChevronDoubleRightIcon className={styles.nextBtnIcon} />
            </button>

            {/* Load More BUTTON */}
            {page * limit < total && (
              <button
                className={clsx(styles.btn, styles.btnLoadMore)}
                onClick={handleLoadMore}
                type='button'
              >
                Показати ще
              </button>
            )}

            {/* Create review BUTTON */}
            <button
              className={clsx(styles.btn, styles.btnAddReview)}
              onClick={openModal}
              type='button'
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
