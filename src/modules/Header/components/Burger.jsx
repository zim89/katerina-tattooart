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
          <span className='absolute left-1.1 top-0 h-0.5 w-9.5 rounded bg-primary transition-transform group-[.active]:top-[11px] group-[.active]:rotate-45'></span>
          <span className='absolute left-1.1 top-[10px] h-0.5 w-9.5 rounded bg-primary transition-opacity group-[.active]:opacity-0'></span>
          <span className='absolute left-1.1 top-[20px] h-0.5 w-9.5 rounded bg-primary transition-transform group-[.active]:top-[11px] group-[.active]:-rotate-45'></span>
        </div>
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className='fixed bottom-0 left-0 right-0 top-[3.9375rem] flex justify-center bg-secondary/80'>
          <nav className='z-10 overscroll-none bg-[#393E41] px-[5.375rem] py-[1.5625rem]'>
            <ul className='flex flex-col items-center gap-4.5'>
              {/* TODO: add links to sections */}
              <li>
                <a href='#'>Про нас</a>
              </li>
              <li>
                <a href='#'>Галерея</a>
              </li>
              <li>
                <a href='#'>Догляд</a>
              </li>
              <li>
                <a href='#'>Ціна</a>
              </li>
              <li>
                <a href='#'>Відгуки</a>
              </li>
              <li>
                <a href='#'>Контакти</a>
              </li>
              <li>
                {/* TODO: add language switch */}
                <a href='#' className='text-white'>
                  UA
                </a>
              </li>
              <li>
                {/* TODO: add open user modal */}
                <a href='#'>
                  <UserCircleIcon className='h-10 w-10 stroke-1' />
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
