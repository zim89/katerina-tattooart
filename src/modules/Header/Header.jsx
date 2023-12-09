'use client';
import { useState } from 'react';

import Logo from './components/Logo';
import Navbar from './components/Navbar';
import UserMenu from './components/UserMenu';
import Burger from './components/Burger';
import LangSelect from '@/modules/Header/components/LangSelect';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className='group fixed top-0 z-10 h-full max-h-[3.875rem] w-full overflow-hidden border-b border-white/60 bg-secondary/80 transition-[max-height] duration-500 data-[state=open]:max-h-[calc(3.875rem+24rem)] md:max-h-[67px]  xl:max-h-[94px]'
      data-state={isMenuOpen ? 'open' : 'closed'}
    >
      <div className='relative flex h-[3.875rem] items-center justify-between bg-secondary md:h-[67px] xl:h-[94px]'>
        <div className='container flex h-[61px] w-full items-center justify-between'>
          <Logo />
          <Navbar />
          <div className='hidden md:flex md:items-center md:gap-2 xl:gap-10'>
            <LangSelect />
            <UserMenu />
          </div>

          <Burger isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
