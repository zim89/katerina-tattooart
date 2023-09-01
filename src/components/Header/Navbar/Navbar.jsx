'use client';
import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import ConsultationModal from '@/components/Modal/ConsultationModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
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
        <button type='button' className='btn' onClick={handleOpenModal}>
          Безкоштовна консультація
        </button>
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

      {isOpen && <ConsultationModal handleOpenModal={handleOpenModal} />}
    </>
  );
};
export default Navbar;
