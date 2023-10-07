const Hero = () => {
  return (
    <section className='md:mb-7.5 mb-5 xl:mb-10'>
      <div className='container'>
        <div className='bg-hero-sm relative h-[21.75rem] bg-[length:244px] bg-center bg-no-repeat'>
          {/* Title */}
          <div className='absolute -left-[4px] top-[148px] flex gap-[62px] md:left-5.5 md:top-[302px] md:gap-[137px] xl:left-[43px] xl:top-[355px] xl:gap-[209px]'>
            <span className='font-nautigal text-[56px] font-normal leading-normal text-white md:text-[100px] xl:text-[180px]'>
              Katerina
            </span>
            <span className='font-nautigal text-[56px] font-normal leading-normal text-white md:text-[100px] xl:text-[180px]'>
              Tattooart
            </span>
          </div>

          {/* Slogan */}
          <p className='absolute left-2 top-[11px] text-[12px] font-normal leading-normal tracking-[0.96px] text-[#E0E0E0] text-opacity-40 md:left-[130px] md:top-4 md:text-[14px] md:tracking-[1.12px] xl:left-[280px] xl:top-6 xl:text-[20px] xl:tracking-[1.6px]'>
            Приношу біль для
          </p>
          <p className='absolute right-0 top-[11px] text-[12px] font-normal leading-normal tracking-[0.96px] text-[#E0E0E0] text-opacity-40 md:right-[114px] md:top-4 md:text-[14px] md:tracking-[1.12px] xl:right-[275px] xl:top-6 xl:text-[20px] xl:tracking-[1.6px]'>
            вашого задоволення
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
