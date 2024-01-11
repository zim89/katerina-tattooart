'use client';
import { useEffect, useState } from 'react';
import ConsultationModal from '@/components/ConsultationModal';
import { Link } from 'react-scroll';
import useScreenSize from '@/hooks/useScreenSize';
import { useFeaturesContext } from '@/context/featuresContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [offset, setOffset] = useState(-140);
  const screen = useScreenSize();
  const { setCurrentIndex } = useFeaturesContext();

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
              to='features'
              spy={true}
              smooth={true}
              offset={offset}
              duration={400}
            >
              <button type={'button'} onClick={() => setCurrentIndex('tab2')}>
                Про нас
              </button>
            </Link>
          </li>
          <li>
            <Link
              className='nav-link'
              to='gallery'
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
              <button type={'button'} onClick={() => setCurrentIndex('tab3')}>
                Догляд
              </button>
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
