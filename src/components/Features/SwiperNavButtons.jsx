import { useSwiper } from 'swiper/react';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className='container mt-4 flex justify-around'>
      <button onClick={() => swiper.slidePrev()}>
        <ChevronDoubleLeftIcon className='h-4 w-5 text-white opacity-[0.14]' />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <ChevronDoubleRightIcon className='h-4 w-5 text-white opacity-[0.14]' />
      </button>
    </div>
  );
};
export default SwiperNavButtons;
