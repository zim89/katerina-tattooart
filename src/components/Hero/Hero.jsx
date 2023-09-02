'use client';
import Image from 'next/image';
import useResize from '@/hooks/useResize';

const Hero = () => {
  const { isScreenTablet, isScreenDesktop } = useResize();
  let src = '/images/hero/mobile-hero-img@2x.png';
  if (isScreenTablet) src = '/images/hero/tablet-hero-img@2x.png';
  if (isScreenDesktop) src = '/images/hero/desktop-hero-img@2x.png';

  return (
    <div className='pb-5 md:pb-[30px] xl:pb-10'>
      <div className='container'>
        <div className='relative w-full'>
          <div className='relative mx-auto h-[348px] w-[244px] md:h-[696px] md:w-[488px] xl:h-[1036px] xl:w-[727px]'>
            <Image
              alt='Hero image'
              src={src}
              fill
              placeholder='blur'
              blurDataURL={src}
            />
          </div>

          {/* Title */}
          <p className='absolute left-0 top-[152px] font-nautigal text-[56px] font-normal leading-normal text-white md:left-[41px] md:top-[310px] md:text-[100px] xl:left-[50px] xl:top-[358px] xl:text-[180px]'>
            Katerina
          </p>
          <p className='absolute left-[200px] top-[152px] font-nautigal text-[56px] font-normal leading-normal text-white md:left-[425px] md:top-[310px] md:text-[100px] xl:left-[710px] xl:top-[358px] xl:text-[180px]'>
            Tattooart
          </p>

          {/* Slogan */}
          <p className='absolute left-3 top-[11px] text-[12px] font-normal leading-[0.96px] text-[#E0E0E0] text-opacity-40 md:left-[155px] md:top-4 md:text-[14px] md:leading-[1.12px] xl:left-[310px] xl:top-6 xl:text-[20px] xl:leading-[1.6px]'>
            Приношу біль для
          </p>
          <p className='absolute right-[6px] top-[11px] text-[12px] font-normal leading-[0.96px] text-[#E0E0E0] text-opacity-40 md:left-[440px] md:top-4 md:text-[14px] md:leading-[1.12px] xl:left-[720px] xl:top-6 xl:text-[20px] xl:leading-[1.6px]'>
            вашого задоволення
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
