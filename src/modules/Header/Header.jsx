import Logo from './components/Logo';
import Navbar from './components/Navbar';
import UserMenu from './components/UserMenu';
import Burger from './components/Burger';

const Header = () => {
  return (
    // TODO: Do we need limits for border? `mx-auto max-w-[1440px]`
    <header>
      <div className='container'>
        <div className='flex items-center justify-between border-b-1 border-b-white/60 py-[.4375rem] md:py-4.5 xl:py-4'>
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
