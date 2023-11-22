'use client';
import { Fragment, useEffect, useRef, useState } from 'react';

import { Transition } from '@headlessui/react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';
import { LogOut, UserCircle2 } from 'lucide-react';
import { Link } from 'react-scroll';
import { toast } from 'react-toastify';

import { AuthModal } from '@/components/Auth';

import 'react-toastify/dist/ReactToastify.min.css';

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState(null);

  const supabase = createClientComponentClient();
  const burgerBtn = useRef(null);

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

  const toggleBurger = () => {
    burgerBtn.current.classList.toggle('active');
    setIsOpen((prev) => !prev);
  };

  const handleOverlayClick = (e) => {
    if (isOpen && e.target === e.currentTarget) {
      toggleBurger();
    }
  };

  useEffect(() => {
    (async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        console.log(error);
        return;
      }

      const currentUser = session?.user;
      if (currentUser) setUser(currentUser);
    })();
  }, [supabase, isAuthOpen]);

  const toggleAuthModal = () => {
    if (isOpen) toggleBurger();
    setIsAuthOpen((prev) => !prev);
  };

  const onLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
      return;
    }
    toggleBurger();
    setUser(null);
    toast.success('Ви успішно вийшли!');
  };

  return (
    <>
      {/* Burger */}
      <button
        className='group block h-12 w-12 md:hidden'
        onClick={toggleBurger}
        ref={burgerBtn}
      >
        <div className='relative h-5'>
          <span className='absolute left-1.1 top-0 h-0.5 w-9.5 rounded bg-primary transition-transform group-[.active]:top-2.75 group-[.active]:rotate-45'></span>
          <span className='absolute left-1.1 top-2.5 h-0.5 w-9.5 rounded bg-primary transition-opacity group-[.active]:opacity-0'></span>
          <span className='absolute left-1.1 top-5 h-0.5 w-9.5 rounded bg-primary transition-transform group-[.active]:top-2.75 group-[.active]:-rotate-45'></span>
        </div>
      </button>

      {/* Burger menu */}
      <Transition
        as={Fragment}
        enter='transition ease-out duration-200'
        enterFrom='opacity-0 translate-y-1'
        enterTo='opacity-100 translate-y-0'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 translate-y-1'
        show={isOpen}
      >
        <div
          className='fixed inset-0 top-16 flex justify-center bg-black/70'
          onClick={handleOverlayClick}
        >
          <nav className='w-[243px] bg-[#393E41] px-[5.375rem] py-[1.5625rem]'>
            <ul className='flex flex-col items-center gap-4.5'>
              <li>
                <Link
                  duration={400}
                  offset={-80}
                  onClick={toggleBurger}
                  smooth={true}
                  spy={true}
                  to='hero'
                >
                  Про нас
                </Link>
              </li>
              <li>
                <Link
                  duration={400}
                  offset={-80}
                  onClick={toggleBurger}
                  smooth={true}
                  spy={true}
                  to='galery'
                >
                  Галерея
                </Link>
              </li>
              <li>
                <Link
                  duration={400}
                  offset={-80}
                  onClick={toggleBurger}
                  smooth={true}
                  spy={true}
                  to='features'
                >
                  Догляд
                </Link>
              </li>
              <li>
                <Link
                  duration={400}
                  offset={-80}
                  onClick={toggleBurger}
                  smooth={true}
                  spy={true}
                  to='price'
                >
                  Ціна
                </Link>
              </li>
              <li>
                <Link
                  duration={400}
                  offset={-80}
                  onClick={toggleBurger}
                  smooth={true}
                  spy={true}
                  to='reviews'
                >
                  Відгуки
                </Link>
              </li>
              <li>
                <Link
                  duration={400}
                  offset={-80}
                  onClick={toggleBurger}
                  smooth={true}
                  spy={true}
                  to='contacts'
                >
                  Контакти
                </Link>
              </li>
              <li>
                <span className='cursor-pointer text-white'>UA</span>
              </li>
              <li>
                {!user ? (
                  <button
                    className='transition-colors duration-200 hover:text-white'
                    onClick={toggleAuthModal}
                    type='button'
                  >
                    <UserCircle2 className='h-10 w-10 stroke-1' />
                  </button>
                ) : (
                  <LogOut
                    className='h-10 w-10 stroke-1'
                    onClick={onLogout}
                    strokeWidth={1.5}
                  />
                )}
              </li>
            </ul>
          </nav>
        </div>
      </Transition>

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
