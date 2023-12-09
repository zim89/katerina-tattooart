import Image from 'next/image';

import Burger from '/public/icons/burger.svg';
import Cross from '/public/icons/cross.svg';

export default function BurgerButton({ onClick }) {
  return (
    <button
      className='relative md:hidden'
      aria-label='toggle mobile menu'
      onClick={onClick}
    >
      <Image
        src={Burger}
        alt='відкрити мобільне меню'
        className="transition-opacity duration-500 group-[[data-state='open']]:opacity-0"
      />
      <Image
        src={Cross}
        alt='відкрити мобільне меню'
        className="absolute top-0 transition-opacity duration-500 group-[[data-state='closed']]:opacity-0"
      />
    </button>
  );
}
