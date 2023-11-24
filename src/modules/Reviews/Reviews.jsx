'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
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

const colors = [
  'bg-red-400',
  'bg-teal-500',
  'bg-indigo-400',
  'bg-pink-400',
  'bg-sky-400',
];

const Reviews = () => {
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(1);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const colorIndex = useRef(0);

  const screen = useScreenSize();
  const { currentUser } = useUserContext();

  const setColor = () => {
    const bgColor = colors[colorIndex.current];

    colorIndex.current === colors.length - 1
      ? (colorIndex.current = 0)
      : colorIndex.current++;
    return bgColor;
  };

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
    colorIndex.current = 0;
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
                bgColor={colors[Math.floor(Math.random() * colors.length)]}
              />
            )}

            {reviews.length > 0 && (
              <div className={styles.list}>
                {reviews.slice(0, limit * page).map((item) => (
                  <ReviewItem
                    key={item.id}
                    review={item}
                    bgColor={setColor()}
                  />
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
