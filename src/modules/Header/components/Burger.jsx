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
        className='group relative z-50 block h-5 w-[30px] md:hidden'
        onClick={handleBurger}
      >
        <span className='absolute left-0 top-0 h-[2px] w-full bg-[#D6D6D6] transition-transform group-[.active]:translate-y-2 group-[.active]:rotate-45'></span>
        <span className='absolute left-0 top-[9px] h-[2px] w-full bg-[#D6D6D6] transition-opacity group-[.active]:opacity-0'></span>
        <span className='absolute bottom-0 left-0 h-[2px] w-full bg-[#D6D6D6] transition-transform group-[.active]:-translate-y-[10px] group-[.active]:-rotate-45'></span>
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className='over fixed bottom-0 left-0 right-0 top-0 z-40 flex justify-center bg-black bg-opacity-75'>
          <nav className='mt-[65px]  w-[243px] overscroll-none bg-[#393E41] pt-[25px]'>
            <ul className='flex flex-col items-center gap-[18px]'>
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
