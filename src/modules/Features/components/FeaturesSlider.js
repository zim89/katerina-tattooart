import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';

export default function FeaturesSlider() {
  const [status, setStatus] = useState('next');
  const swiperRef = useRef();

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const onClick = () => {
    status === 'next' ? setStatus('prev') : setStatus('next');
    status === 'next'
      ? swiperRef.current.slickNext()
      : swiperRef.current.slickPrev();
  };

  return (
    <div>
      <Slider ref={(swiper) => (swiperRef.current = swiper)} {...settings}>
        <div className='px-6'>
          <h3 className='mb-6 text-center text-2xl font-medium leading-[1.364] text-gray'>
            Що потрібно
          </h3>
          <ul className='mb-8 list-outside list-disc'>
            <li className='text-left text-base/[25.664px] text-gray'>
              Добре промити татуювання (бактеріальним милом), просушити
              одноразовим полотенцем.
            </li>
            <li className='text-left text-base/[25.664px] text-gray'>
              Нанести на місце татуювання заживляючий крем.
            </li>
            <li className='text-left text-base/[25.664px] text-gray'>
              Поверх крему накласти одноразовий рушник або пеленку.
            </li>
            <li className='text-left text-base/[25.664px] text-gray'>
              Зафіксувати плівкою або рулонним пластирем.
            </li>
          </ul>
          <p className='text-left text-base/[25.664px] text-gray'>
            Такі перев’язки робити кожні 6 годин
          </p>
        </div>

        <div className='pl-6 pr-7'>
          <h3 className='mb-6 text-center text-2xl font-medium leading-[1.364] text-gray'>
            Що неможна
          </h3>
          <ul className='list-outside list-disc'>
            <li className='text-left text-base/[25.664px] text-gray'>
              Засмагати та відвідувати солярії до повного заживання татуювання.
            </li>
            <li className='text-left text-base/[25.664px] text-gray'>
              Купатись, приймати сауни та бані до повного заживання татуювання.
            </li>
            <li className='text-left text-base/[25.664px] text-gray'>
              Вживати наркотичні та медичні препарати, які розріджують кров
              перші 3-5 днів.
            </li>
            <li className='text-left text-base/[25.664px] text-gray'>
              Робити фізичні навантаження перші 3-5 днів.
            </li>
            <li className='text-left text-base/[25.664px] text-gray'>
              Вживати спиртні напої, енергетики в перші 3 дні після татуювання.
            </li>
          </ul>
        </div>
      </Slider>

      <button className='mt-4 flex w-full justify-center' onClick={onClick}>
        <ChevronDoubleRightIcon
          className='h-8 w-10 text-white opacity-[0.14] transition-transform duration-300 data-[status=prev]:rotate-180'
          data-status={status}
        />
      </button>
    </div>
  );
}
