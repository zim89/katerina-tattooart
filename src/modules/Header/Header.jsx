import Logo from './components/Logo';
import Navbar from './components/Navbar';
import UserMenu from './components/UserMenu';
import Burger from './components/Burger';
import LangSelect from '@/modules/Header/components/LangSelect';

const Header = () => {
  return (
    <header className='fixed top-0 z-10 w-full  bg-secondary '>
      <div className='container border-b-1 border-b-[#E0E0E0] xl:border-none'>
        <div className='flex h-[61px] w-full items-center justify-between md:h-[67px] xl:h-[94px] xl:border-b-1 xl:border-b-[#E0E0E0]'>
          <Logo />
          <Navbar />
          <div className='hidden md:flex md:items-center md:gap-2 xl:gap-10'>
            <LangSelect />
            <UserMenu />
          </div>

          <Burger />
        </div>
      </div>
    </header>
  );
};

export default Header;
