// FIXME: Unused

import { UserCircleIcon } from '@heroicons/react/24/outline';

const MobileMenu = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 top-0 flex justify-center bg-black bg-opacity-75'>
      <nav className='mt-[65px]  w-[243px] bg-[#393E41] pt-[25px]'>
        <ul className='flex flex-col items-center gap-[18px]'>
          <li>
            <a href='#' className='mobile-link'>
              Про нас
            </a>
          </li>
          <li>
            <a href='#' className='mobile-link'>
              Галерея
            </a>
          </li>
          <li>
            <a href='#' className='mobile-link'>
              Догляд
            </a>
          </li>
          <li>
            <a href='#' className='mobile-link'>
              Ціна
            </a>
          </li>
          <li>
            <a href='#' className='mobile-link'>
              Відгуки
            </a>
          </li>
          <li>
            <a href='#' className='mobile-link'>
              Контакти
            </a>
          </li>
          <li>
            <a href='#' className='mobile-link'>
              UA
            </a>
          </li>
          <li>
            <a href='#' className=''>
              <UserCircleIcon className='h-10 w-10' />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default MobileMenu;
