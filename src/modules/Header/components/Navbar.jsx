'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import ConsultationModal from '@/components/ConsultationModal/ConsultationModal';
import useScreenSize from '@/hooks/useScreenSize';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [offset, setOffset] = useState(-140);
  const screen = useScreenSize();

  useEffect(() => {
    if (screen.width >= 768 && screen.width < 1280) {
      setOffset(-100);
    }
  }, [screen]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='flex items-center gap-2.5 xl:gap-16.5'>
        <ul className='nav-list'>
          <li>
            <Link
              className='nav-link'
              duration={400}
              offset={offset}
              smooth={true}
              spy={true}
              to='hero'
            >
              Про нас
            </Link>
          </li>
          <li>
            <Link
              className='nav-link'
              duration={400}
              offset={offset}
              smooth={true}
              spy={true}
              to='galery'
            >
              Галерея
            </Link>
          </li>
          <li>
            <Link
              className='nav-link'
              duration={400}
              offset={offset}
              smooth={true}
              spy={true}
              to='features'
            >
              Догляд
            </Link>
          </li>
        </ul>

        <button className='btn' onClick={toggleModal} type='button'>
          Безкоштовна консультація
        </button>

        <ul className='nav-list'>
          <li>
            <Link
              className='nav-link'
              duration={400}
              offset={offset}
              smooth={true}
              spy={true}
              to='price'
            >
              Ціна
            </Link>
          </li>
          <li>
            <Link
              className='nav-link'
              duration={400}
              offset={offset}
              smooth={true}
              spy={true}
              to='reviews'
            >
              Відгуки
            </Link>
          </li>
          <li>
            <Link
              className='nav-link'
              duration={400}
              offset={offset}
              smooth={true}
              spy={true}
              to='contacts'
            >
              Контакти
            </Link>
          </li>
        </ul>
      </nav>

      {isOpen && <ConsultationModal closeModal={toggleModal} />}
    </>
  );
};

export default Navbar;
