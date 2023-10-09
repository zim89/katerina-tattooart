import Logo from './components/Logo';
import Navbar from './components/Navbar';
import UserMenu from './components/UserMenu';
import Burger from './components/Burger';

const Header = () => {
  return (
    <header className='fixed left-0 right-0 top-0 z-20 border-b-1 border-b-white/60 bg-secondary'>
      <div className='container'>
        <div className='flex items-center justify-between py-[.4375rem] md:py-4.5 xl:py-4'>
          <Logo />
          <Navbar />
          <UserMenu />
          <Burger />
        </div>
      </div>
    </header>
  );
};

export default Header;
