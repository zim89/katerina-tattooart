'use client';
import { AuthModal } from '@/components/Auth';
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useUserContext } from '@/context/userContext';
import userAPI from '@/supabase/api/user';
import LangSelect from './LangSelect';
import BurgerButton from './BurgerButton';

const Burger = ({ isOpen, setIsOpen }) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { currentUser, logOut } = useUserContext();
  const ref = useRef(null);

  useEffect(() => {
    let targetElement = document.body;
    if (isOpen) {
      disableBodyScroll(targetElement);
    } else {
      enableBodyScroll(targetElement);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (ref.current && !ref.current.contains(e.target) && isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOverlayClick);
    return () => {
      document.removeEventListener('click', handleOverlayClick);
    };
  });

  const toggleBurger = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleAuthModal = () => {
    if (isOpen) toggleBurger();
    setIsAuthOpen((prev) => !prev);
  };

  const onLogout = async () => {
    const { error } = await userAPI.logout();

    if (error) {
      toast.error('Виникла помилка. Спробуйте пізніше!');
      return;
    }

    logOut();
    toggleBurger();
    toast.success('Ви успішно вийшли!');
  };

  return (
    <>
      <BurgerButton onClick={toggleBurger} />

      {/* Burger menu */}
      <div
        ref={ref}
        className="absolute bottom-0 left-1/2 h-screen max-h-[calc(100dvh-3.875rem)] w-[15.1875rem] -translate-x-1/2 translate-y-full overflow-auto bg-[#393E41] py-[1.56rem] text-center transition-opacity duration-500 group-[[data-state='closed']]:opacity-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex flex-col items-center space-y-[1.125rem]'>
          <nav>
            <ul className='space-y-[1.125rem]'>
              <li>
                <Link
                  to='hero'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={400}
                  onClick={toggleBurger}
                  tabIndex={isOpen ? undefined : -1}
                >
                  Про нас
                </Link>
              </li>
              <li>
                <Link
                  to='galery'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={400}
                  onClick={toggleBurger}
                  tabIndex={isOpen ? undefined : -1}
                >
                  Галерея
                </Link>
              </li>
              <li>
                <Link
                  to='features'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={400}
                  onClick={toggleBurger}
                  tabIndex={isOpen ? undefined : -1}
                >
                  Догляд
                </Link>
              </li>
              <li>
                <Link
                  to='price'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={400}
                  onClick={toggleBurger}
                  tabIndex={isOpen ? undefined : -1}
                >
                  Ціна
                </Link>
              </li>
              <li>
                <Link
                  to='reviews'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={400}
                  onClick={toggleBurger}
                  tabIndex={isOpen ? undefined : -1}
                >
                  Відгуки
                </Link>
              </li>
              <li>
                <Link
                  to='contacts'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={400}
                  onClick={toggleBurger}
                  tabIndex={isOpen ? undefined : -1}
                >
                  Контакти
                </Link>
              </li>
            </ul>
          </nav>

          <LangSelect row />

          {!currentUser ? (
            <button className='group' type='button' onClick={toggleAuthModal}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 22 22'
                fill='none'
                className='h-10 w-10 stroke-primary stroke-1 transition-all group-hover:stroke-white'
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
          ) : (
            <button
              className='group flex items-end justify-center gap-[6px] text-center align-text-bottom'
              onClick={onLogout}
            >
              Вийти
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='h-6 w-6 fill-primary stroke-1'
              >
                <path d='M15.5 17V18C15.5 20.29 14.29 21.5 12 21.5H6C3.71 21.5 2.5 20.29 2.5 18V6C2.5 3.71 3.71 2.5 6 2.5H12C14.29 2.5 15.5 3.71 15.5 6V7C15.5 7.276 15.276 7.5 15 7.5C14.724 7.5 14.5 7.276 14.5 7V6C14.5 4.271 13.729 3.5 12 3.5H6C4.271 3.5 3.5 4.271 3.5 6V18C3.5 19.729 4.271 20.5 6 20.5H12C13.729 20.5 14.5 19.729 14.5 18V17C14.5 16.724 14.724 16.5 15 16.5C15.276 16.5 15.5 16.724 15.5 17ZM21.461 12.191C21.512 12.069 21.512 11.931 21.461 11.809C21.436 11.747 21.399 11.692 21.353 11.646L18.353 8.646C18.158 8.451 17.841 8.451 17.646 8.646C17.451 8.841 17.451 9.158 17.646 9.353L19.792 11.499H8C7.724 11.499 7.5 11.723 7.5 11.999C7.5 12.275 7.724 12.499 8 12.499H19.793L17.647 14.645C17.452 14.84 17.452 15.157 17.647 15.352C17.745 15.45 17.873 15.498 18.001 15.498C18.129 15.498 18.257 15.449 18.355 15.352L21.355 12.352C21.399 12.308 21.436 12.252 21.461 12.191Z' />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Auth modal */}
      {isAuthOpen && <AuthModal closeModal={toggleAuthModal} />}

      {/* <button
        className='group block h-12 w-12 md:hidden'
        ref={burgerBtn}
        onClick={toggleBurger}
      >
        <div className='relative h-5'>
          <span className='absolute left-1.1 top-0 h-0.5 w-9.5 rounded bg-primary transition-transform group-[.active]:top-2.75 group-[.active]:rotate-45'></span>
          <span className='absolute left-1.1 top-2.5 h-0.5 w-9.5 rounded bg-primary transition-opacity group-[.active]:opacity-0'></span>
          <span className='absolute left-1.1 top-5 h-0.5 w-9.5 rounded bg-primary transition-transform group-[.active]:top-2.75 group-[.active]:-rotate-45'></span>
        </div>
      </button> */}

      {/* Mobile menu */}
      {/* <Transition appear show={isOpen} as={Fragment}> */}
      {/* <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-white' aria-hidden='true' />
          </Transition.Child> */}
      {/* <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <div className='fixed inset-0 top-16 flex w-screen items-center justify-center bg-white/50 p-4'>
            <div className='w-full max-w-sm rounded bg-white'>FFFFFFF</div>
          </div>
        </Transition.Child>
      </Transition> */}

      {/* {isOpen && (
        <div
          ref={mobileMenu}
          className='fixed bottom-0 left-0 right-0 top-[3.9375rem] z-20 flex justify-center bg-secondary/80'
        >
          <nav className='z-10 overscroll-none bg-[#393E41] px-[5.375rem] py-[1.5625rem]'>
            <ul className='flex flex-col items-center gap-4.5'>
              <li>
                <Link
                  to='hero'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={400}
                  onClick={toggleBurger}
                  tabIndex={isOpen ? undefined : -1}
                >
                  Про нас
                </Link>
              </li>
              <li>
                <Link
                  to='galery'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={400}
                  onClick={toggleBurger}
                  tabIndex={isOpen ? undefined : -1}
                >
                  Галерея
                </Link>
              </li>
              <li>
                <Link
                  to='features'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={400}
                  onClick={toggleBurger}
                  tabIndex={isOpen ? undefined : -1}
                >
                  Догляд
                </Link>
              </li>
              <li>
                <Link
                  to='price'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={400}
                  onClick={toggleBurger}
                  tabIndex={isOpen ? undefined : -1}
                >
                  Ціна
                </Link>
              </li>
              <li>
                <Link
                  to='reviews'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={400}
                  onClick={toggleBurger}
                  tabIndex={isOpen ? undefined : -1}
                >
                  Відгуки
                </Link>
              </li>
              <li>
                <Link
                  to='contacts'
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={400}
                  onClick={toggleBurger}
                  tabIndex={isOpen ? undefined : -1}
                >
                  Контакти
                </Link>
              </li>
              <li>
                <span className='cursor-pointer text-white'>UA</span>
              </li>
              <li>
                {!user ? (
                  // <Avatar
                  //   styles='h-10 w-10 stroke-1'
                  // />
                  <button
                    className='transition-colors duration-200 hover:text-white'
                    type='button'
                    onClick={openAuthModal}
                  >
                    <UserCircle2 className='h-10 w-10 stroke-1' />
                  </button>
                ) : (
                  <LogOut
                    strokeWidth={1.5}
                    className='h-10 w-10 stroke-1'
                    onClick={onLogout}
                  />
                )}
              </li>
            </ul>
          </nav>
        </div>
      )} */}
    </>
  );
};

export default Burger;
