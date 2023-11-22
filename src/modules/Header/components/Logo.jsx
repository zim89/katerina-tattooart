import Image from 'next/image';

import logo from '/public/icons/logo.svg';

const Logo = () => {
  return (
    <Image
      alt='Катерина Татту Лого'
      className='xl:h-[67px] xl:w-[57px]'
      src={logo}
    />
  );
};

export default Logo;
