'use client';

import { useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurger = (e) => {
    e.currentTarget.classList.toggle('active');
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Burger menu */}

      <button
        className='group z-50 block h-12 w-12 md:hidden'
        onClick={handleBurger}
      >
        <div className='relative h-5'>
          <span className='w-9.5 left-1.1 absolute top-0 h-0.5 rounded bg-primary transition-transform group-[.active]:top-[11px] group-[.active]:rotate-45'></span>
          <span className='w-9.5 left-1.1 absolute top-[10px] h-0.5 rounded bg-primary transition-opacity group-[.active]:opacity-0'></span>
          <span className='w-9.5 left-1.1 absolute top-[20px] h-0.5 rounded bg-primary transition-transform group-[.active]:top-[11px] group-[.active]:-rotate-45'></span>
        </div>
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className='over fixed bottom-0 left-0 right-0 top-0 z-40 flex justify-center bg-black bg-opacity-75'>
          <nav className='mt-[65px]  w-[243px] overscroll-none bg-[#393E41] pt-[25px]'>
            <ul className='gap-4.5 flex flex-col items-center'>
              <li>
                <a href='#' className='mobile-link'>
                  Про нас
                </a>
              </li>
              <li>
                <a href='#' className='mobile-link'>
                  Галерея
                </a>
              </li>
              <li>
                <a href='#' className='mobile-link'>
                  Догляд
                </a>
              </li>
              <li>
                <a href='#' className='mobile-link'>
                  Ціна
                </a>
              </li>
              <li>
                <a href='#' className='mobile-link'>
                  Відгуки
                </a>
              </li>
              <li>
                <a href='#' className='mobile-link'>
                  Контакти
                </a>
              </li>
              <li>
                <a href='#' className='mobile-link'>
                  UA
                </a>
              </li>
              <li>
                <a href='#'>
                  <UserCircleIcon className='h-10 w-10 stroke-[1px]' />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Burger;
