'use client';

import { useState } from 'react';

import ConsultationModal from '@/components/ConsultationModal/ConsultationModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='flex gap-2.5 xl:gap-16.5'>
        <ul className='nav-list'>
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

        <button type='button' className='btn' onClick={toggleModal}>
          Безкоштовна консультація
        </button>

        <ul className='nav-list'>
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

      {isOpen && <ConsultationModal toggleModal={toggleModal} />}
    </>
  );
};

export default Navbar;
