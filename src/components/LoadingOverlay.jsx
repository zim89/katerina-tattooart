import Image from 'next/image';
import React from 'react';
import spinnerSrc from '/public/icons/spinner.svg';

const LoadingOverlay = () => {
  return (
    <div className='absolute inset-0 flex items-center justify-center backdrop-blur-[2px]'>
      <Image
        src={spinnerSrc}
        alt='Spinner'
        className=' h-12 w-12 animate-spin md:h-14 md:w-14 xl:h-16 xl:w-16'
      />
    </div>
  );
};

export default LoadingOverlay;
