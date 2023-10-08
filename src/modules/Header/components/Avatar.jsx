'use client';
import { useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { AuthModal } from '@/components/Auth';

const Avatar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className='transition-colors duration-200 hover:text-white'
        type='button'
        onClick={toggleModal}
      >
        <UserCircleIcon className='h-5.5 w-5.5 stroke-1 xl:h-11 xl:w-11' />
      </button>

      {isOpen && <AuthModal toggleModal={toggleModal} />}
    </>
  );
};

export default Avatar;
