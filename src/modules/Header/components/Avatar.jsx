'use client';
import { useState } from 'react';
import { AuthModal } from '@/components/Auth';

const Avatar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button className='group' type='button' onClick={toggleModal}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 22 22'
          fill='none'
          className='stroke-primary transition-all group-hover:stroke-white md:h-[22px] md:w-[22px] xl:h-11 xl:w-11'
        >
          <path
            d='M4.05273 18.7743V17.7818C4.05273 13.9449 7.16318 10.8345 11.0001 10.8345C14.837 10.8345 17.9475 13.9449 17.9475 17.7818V18.7743'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='stroke-primary transition-all group-hover:stroke-white'
          />
          <path
            d='M11.0002 10.8346C13.1927 10.8346 14.9701 9.05719 14.9701 6.8647C14.9701 4.67217 13.1927 2.89478 11.0002 2.89478C8.80767 2.89478 7.03027 4.67217 7.03027 6.8647C7.03027 9.05719 8.80767 10.8346 11.0002 10.8346Z'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='stroke-primary transition-all group-hover:stroke-white'
          />
          <rect x='0.5' y='0.5' width='21' height='21' rx='10.5' />
        </svg>
      </button>

      {isOpen && <AuthModal closeModal={toggleModal} />}
    </>
  );
};

export default Avatar;
