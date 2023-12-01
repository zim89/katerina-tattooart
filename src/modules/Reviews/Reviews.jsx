'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import clsx from 'clsx';

import ReviewItem from './components/ReviewItem';
import ReviewModal from './components/ReviewModal';
import SwiperReviews from './components/SwiperReviews';

import reviewsAPI from '@/supabase/api/review';
import { useUserContext } from '@/context/userContext';
import useScreenSize from '@/hooks/useScreenSize';
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

            <div className='mb-2 md:hidden'>
              <SwiperReviews reviews={reviews} />
            </div>

            {/* {reviews.length > 0 && (
              <ReviewItem
                review={reviews[page - 1]}
                style={styles.reviewItem}
                bgColor={colors[Math.floor(Math.random() * colors.length)]}
              />
            )} */}
            <div className='hidden md:block'>
              {reviews.length > 0 && (
                <div className={styles.list}>
                  {reviews.slice(0, limit * page).map((item) => (
                    <ReviewItem key={item.id} review={item} />
                  ))}
                </div>
              )}
            </div>

            {/* Next BUTTON */}
            {/* <button
              className='ml-auto block md:hidden'
              onClick={handleNext}
              type='button'
            >
              <ChevronDoubleRightIcon className='h-8 w-10 text-white opacity-[0.14] transition-opacity duration-200 ease-linear hover:opacity-100' />
            </button> */}

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
              className={clsx(styles.btn, 'mx-auto md:ml-0 md:mr-auto')}
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
