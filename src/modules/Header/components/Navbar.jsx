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
              to='hero'
              spy={true}
              smooth={true}
              offset={offset}
              duration={400}
            >
              Про нас
            </Link>
          </li>
          <li>
            <Link
              className='nav-link'
              to='galery'
              spy={true}
              smooth={true}
              offset={offset}
              duration={400}
            >
              Галерея
            </Link>
          </li>
          <li>
            <Link
              className='nav-link'
              to='features'
              spy={true}
              smooth={true}
              offset={offset}
              duration={400}
            >
              Догляд
            </Link>
          </li>
        </ul>

        <button type='button' className='btn' onClick={toggleModal}>
          Безкоштовна консультація
        </button>

        <ul className='nav-list'>
          <li>
            <Link
              className='nav-link'
              to='price'
              spy={true}
              smooth={true}
              offset={offset}
              duration={400}
            >
              Ціна
            </Link>
          </li>
          <li>
            <Link
              className='nav-link'
              to='reviews'
              spy={true}
              smooth={true}
              offset={offset}
              duration={400}
            >
              Відгуки
            </Link>
          </li>
          <li>
            <Link
              className='nav-link'
              to='contacts'
              spy={true}
              smooth={true}
              offset={offset}
              duration={400}
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
