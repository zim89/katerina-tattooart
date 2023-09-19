import Logo from './components/Logo';
import Navbar from './components/Navbar';
import UserMenu from './components/UserMenu';
import Burger from './components/Burger';

const Header = () => {
  return (
    <header className='mx-auto max-w-[1440px] border-b-[0.5px] border-b-white/60'>
      <div className='container'>
        <div className='flex items-center justify-between py-[15px] md:py-[18px] xl:py-4'>
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
