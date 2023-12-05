import Image from 'next/image';
import logoSrc from '/public/icons/logo.svg';

const Logo = () => {
  return (
    <Image
      src={logoSrc}
      alt='Катерина Татту Лого'
      className='h-[34px] w-[29px] xl:relative xl:left-[-13px] xl:h-[57px] xl:w-[67px]'
    />
  );
};

export default Logo;
