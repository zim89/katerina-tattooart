'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import css from './styles.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='mx-auto max-w-[1440px] border-b-[0.5px] border-b-white/60'>
      <div className='container'>
        <div className='flex items-center justify-between py-[15px] md:py-[18px] xl:py-4'>
          {/* Logo */}
          <div className='relative h-[34px] w-[29px] xl:h-[67px] xl:w-[57px]'>
            <Image src='/icons/logo.svg' alt='User image' fill />
          </div>

          {/* Navbar */}
          <nav className='flex gap-[10px] xl:gap-[54px]'>
            <ul className='hidden md:flex md:items-center md:gap-2 xl:gap-6'>
              <li>
                <a className='nav-link' href='#'>
                  Про нас
                </a>
              </li>
              <li>
                <a className='nav-link' href='#'>
                  Галерея
                </a>
              </li>
              <li>
                <a className='nav-link' href='#'>
                  Догляд
                </a>
              </li>
            </ul>
            <button className='btn'>Безкоштовна консультація</button>
            <ul className='hidden md:flex md:items-center md:gap-2 xl:gap-6'>
              <li>
                <a className='nav-link' href='#'>
                  Ціна
                </a>
              </li>
              <li>
                <a className='nav-link' href='#'>
                  Відгуки
                </a>
              </li>
              <li>
                <a className='nav-link' href='#'>
                  Контакти
                </a>
              </li>
            </ul>
          </nav>

          {/* Lang + User menu */}
          <ul className='hidden md:flex md:items-center md:gap-2 xl:gap-10'>
            <li>
              <a className='nav-link' href='#'>
                UA
              </a>
            </li>
            <li>
              <a
                href='#'
                className='relative block h-[22px] w-[22px] xl:h-11 xl:w-11'
              >
                <Image src='/icons/user.svg' fill alt='User image' />
              </a>
            </li>
          </ul>

          {/* Burger menu */}
          <button
            className='group relative z-10 block h-5 w-[30px] md:hidden'
            onClick={(e) => {
              e.currentTarget.classList.toggle('active');
              setIsOpen(!isOpen);
            }}
          >
            <span className='absolute left-0 top-0 h-[2px] w-full bg-[#D6D6D6] transition-transform group-[.active]:translate-y-2 group-[.active]:rotate-45'></span>
            <span className='absolute left-0 top-[9px] h-[2px] w-full bg-[#D6D6D6] transition-opacity group-[.active]:opacity-0'></span>
            <span className='absolute bottom-0 left-0 h-[2px] w-full bg-[#D6D6D6] transition-transform group-[.active]:-translate-y-[10px] group-[.active]:-rotate-45'></span>
          </button>

          {/* Mobile menu */}
          {isOpen && (
            <div className='fixed bottom-0 left-0 right-0 top-0 flex justify-center bg-black bg-opacity-75'>
              <nav className='mt-[63px]  w-[243px] bg-[#393E41] pt-[25px]'>
                <ul className='flex flex-col items-center gap-[18px]'>
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
                    <a href='#'>UA</a>
                  </li>
                  <li>
                    <a href='#' className='relative block h-10 w-10'>
                      <Image src='/icons/user.svg' fill alt='User image' />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
          {/* <div
            ref={modalRef}
            className='fixed bottom-0 left-0 right-0 top-0 flex justify-center bg-black bg-opacity-75'
          >
            <nav className='mt-[63px]  w-[243px] bg-[#393E41] pt-[25px]'>
              <ul className='flex flex-col items-center gap-[18px]'>
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
                  <a href='#'>UA</a>
                </li>
                <li>
                  <a href='#' className='relative block h-10 w-10'>
                    <Image src='/icons/user.svg' fill alt='User image' />
                  </a>
                </li>
              </ul>
            </nav>
          </div> */}
        </div>
      </div>
    </header>
  );
};
export default Header;
