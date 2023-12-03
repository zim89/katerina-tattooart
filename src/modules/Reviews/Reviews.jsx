'use client';
import { useEffect, useLayoutEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import clsx from 'clsx';

import ReviewItem from './components/ReviewItem';
import ReviewModal from './components/ReviewModal';
import SwiperReviews from './components/SwiperReviews';

import reviewsAPI from '@/supabase/api/review';
import { useUserContext } from '@/context/userContext';
import useScreenSize from '@/hooks/useScreenSize';

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
      <div
        className='relative mb-10 pb-10 md:mb-[52px] md:pb-7.5 xl:mb-20 xl:pb-20'
        id='reviews'
      >
        <div className='absolute bottom-0 left-0 h-[0.5px] w-full bg-gradient-to-r from-[#E7654E]/0 via-primary to-[#E7654E]/0'></div>
        <div className='container'>
          <h2
            className={clsx('caption', 'mb-[71px] text-left md:mb-8 xl:mb-20')}
          >
            Відгуки
          </h2>

          <div className='md:hidden'>
            <SwiperReviews reviews={reviews} />
          </div>

          <div className='hidden md:block'>
            {reviews.length > 0 && (
              <div className='mb-4 grid grid-cols-2 gap-x-[21px] gap-y-10 xl:mb-6 xl:grid-cols-3 xl:gap-x-10 xl:gap-y-16'>
                {reviews.slice(0, limit * page).map((item) => (
                  <ReviewItem key={item.id} review={item} />
                ))}
              </div>
            )}

            {/* Load More BUTTON */}
            {page * limit < total && (
              <button
                className='relative ml-auto block text-lg transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-full'
                onClick={handleLoadMore}
                type='button'
              >
                Показати ще
              </button>
            )}
          </div>

          {/* Create review BUTTON */}
          <button
            className='relative mx-auto block text-base transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-full md:ml-14 md:mr-auto md:text-[20px] xl:ml-16 xl:text-2xl'
            onClick={openModal}
            type='button'
          >
            Додати відгук
          </button>
        </div>
      </div>

      {isOpen && <ReviewModal closeModal={closeModal} />}
    </>
  );
};

export default Reviews;
