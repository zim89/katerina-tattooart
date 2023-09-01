import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
import UserMenu from './UserMenu/UserMenu';
import Burger from './Burger/Burger';

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
