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
      <button type='button' onClick={toggleModal}>
        <UserCircleIcon className='h-[22px] w-[22px] stroke-[1px] xl:h-11 xl:w-11' />
      </button>

      {isOpen && <AuthModal toggleModal={toggleModal} />}
    </>
  );
};

export default Avatar;
