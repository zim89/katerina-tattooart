import Image from 'next/image';

const Logo = () => {
  return (
    <div className='relative h-[34px] w-[29px] xl:h-[67px] xl:w-[57px]'>
      <Image src='/icons/logo.svg' alt='User image' fill />
    </div>
  );
};
export default Logo;
