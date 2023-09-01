import Image from 'next/image';

const UserMenu = () => {
  return (
    <ul className='hidden md:flex md:items-center md:gap-2 xl:gap-10'>
      <li>
        <a className='nav-link' href='#'>
          UA
        </a>
      </li>
      <li>
        <a
          href='#'
          className='relative block h-[22px] w-[22px] xl:h-11 xl:w-11'
        >
          <Image src='/icons/user.svg' fill alt='User image' />
        </a>
      </li>
    </ul>
  );
};
export default UserMenu;
