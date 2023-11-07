'use client';
import { useEffect, useRef, useState } from 'react';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { UserCircle2, LogOut } from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Link } from 'react-scroll';
import { AuthModal } from '@/components/Auth';

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState(null);

  const supabase = createClientComponentClient();
  const burgerBtn = useRef(null);
  const mobileMenu = useRef();

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

  useEffect(() => {
    const closeMenu = (e) => {
      if (!e.matches) return;
      burgerBtn.current?.classList.remove('active');
      enableBodyScroll(mobileMenu);
      setIsOpen(false);
    };

    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', closeMenu);

    return () => {
      clearAllBodyScrollLocks();
      window.removeEventListener('change', closeMenu);
    };
  }, []);

  const handleBurger = () => {
    burgerBtn.current?.classList.toggle('active');
    setIsOpen(!isOpen);
    !isOpen ? disableBodyScroll(mobileMenu) : enableBodyScroll(mobileMenu);
  };

  const onLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
      return;
    }
    handleBurger();
    setUser(null);
    toast.success('Ви успішно вийшли!');
  };

  const openAuthModal = () => {
    handleBurger();
    setIsAuthOpen(true);
  };

  return (
    <>
      {/* Burger menu */}
      <button
        className='group z-30 block h-12 w-12 md:hidden'
        ref={burgerBtn}
        onClick={handleBurger}
      >
        <div className='relative h-5'>
          <span className='absolute left-1.1 top-0 h-0.5 w-9.5 rounded bg-primary transition-transform group-[.active]:top-2.75 group-[.active]:rotate-45'></span>
          <span className='absolute left-1.1 top-2.5 h-0.5 w-9.5 rounded bg-primary transition-opacity group-[.active]:opacity-0'></span>
          <span className='absolute left-1.1 top-5 h-0.5 w-9.5 rounded bg-primary transition-transform group-[.active]:top-2.75 group-[.active]:-rotate-45'></span>
        </div>
      </button>

      {/* Mobile menu */}
      {isOpen && (
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
                  onClick={handleBurger}
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
                  onClick={handleBurger}
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
                  onClick={handleBurger}
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
                  onClick={handleBurger}
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
                  onClick={handleBurger}
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
                  onClick={handleBurger}
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
      )}

      {isAuthOpen && <AuthModal toggleModal={setIsAuthOpen} />}
    </>
  );
};

export default Burger;
