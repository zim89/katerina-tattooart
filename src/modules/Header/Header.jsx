import Logo from './components/Logo';
import Navbar from './components/Navbar';
import UserMenu from './components/UserMenu';
import Burger from './components/Burger';

const Header = () => {
  return (
    // TODO: Do we need limits for border? `mx-auto max-w-[1440px]`
    <header className='border-b-1 border-b-white/60'>
      <div className='container'>
        <div className='py-3.75 md:py-4.5 flex items-center justify-between xl:py-4'>
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
