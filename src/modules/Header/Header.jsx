import Burger from './components/Burger';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import UserMenu from './components/UserMenu';

const Header = () => {
  return (
    <header className='fixed left-0 right-0 top-0 z-10 flex h-16 items-center border-b-1 border-b-white/60 bg-secondary xl:h-24'>
      <div className='container'>
        <div className='flex items-center justify-between'>
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
