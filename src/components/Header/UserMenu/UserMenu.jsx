import { UserCircleIcon } from '@heroicons/react/24/outline';

const UserMenu = () => {
  return (
    <ul className='hidden md:flex md:items-center md:gap-2 xl:gap-10'>
      <li>
        <a className='nav-link' href='#'>
          UA
        </a>
      </li>
      <li>
        <a href='#'>
          <UserCircleIcon className='h-[22px] w-[22px] stroke-[1px] xl:h-11 xl:w-11' />
        </a>
      </li>
    </ul>
  );
};
export default UserMenu;
