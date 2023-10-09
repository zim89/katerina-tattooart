'use client';
import { useState } from 'react';
import { UserCircle2 } from 'lucide-react';
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
        <UserCircle2 className='h-6 w-6 stroke-1 xl:h-11 xl:w-11' />
      </button>

      {isOpen && <AuthModal toggleModal={toggleModal} />}
    </>
  );
};

export default Avatar;
