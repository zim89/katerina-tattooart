'use client';

import clsx from 'clsx';
import { useEffect, useLayoutEffect, useState } from 'react';

import { Thumbs, FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';

// import styles from './styles/features.module.css';

import 'swiper/css';
import { Transition } from '@headlessui/react';
import AnimateHeight from 'react-animate-height';
import useScreenSize from '@/hooks/useScreenSize';

const Features = () => {
  const { width } = useScreenSize();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [index, setIndex] = useState(1);
  // const [height, setHeight] = useState('auto');
  const [height, setHeight] = useState(null);

  useLayoutEffect(() => {
    if (width < 768) setHeight(66);
    if (width >= 768 && width < 1280) setHeight(50);
  }, [width]);

  const featureTitles = [
    'Професійність',
    'Безпека та гігієна',
    'Унікальний дизайн',
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' + className + '">' + featureTitles[index] + '</span>'
      );
    },
  };

  const onClick = (idx) => {
    setIndex(idx);

    switch (idx) {
      case 2:
        if (width < 768) setHeight(66);
        if (width >= 768 && width < 1280) setHeight(76);
        if (width >= 1280) setHeight(131);
        break;
      case 3:
        if (width < 768) setHeight(66);
        if (width >= 768 && width < 1280) setHeight(50);
        if (width >= 1280) setHeight(455);
        setHeight(455);
        break;
      default:
        if (width < 768) setHeight(66);
        if (width >= 768 && width < 1280) setHeight(50);
        if (width >= 1280) setHeight(50);
    }
  };

  return (
    <div className='mb-10 md:mb-15 xl:mb-20' id='features'>
      {/*Features Navigation*/}
      <div className={styles.navWrap}>
        <button
          className={clsx(
            styles.navItem,
            index !== 1 && styles.navItemHover,
            index === 1 && styles.navItemActive
          )}
          onClick={() => onClick(1)}
        >
          Унікальний дизайн
        </button>
        <button
          className={clsx(
            styles.navItem,
            index !== 2 && styles.navItemHover,
            index === 2 && styles.navItemActive
          )}
          onClick={() => onClick(2)}
        >
          Професійність
        </button>
        <button
          className={clsx(
            styles.navItem,
            index !== 3 && styles.navItemHover,
            index === 3 && styles.navItemActive
          )}
          onClick={() => onClick(3)}
        >
          Безпека та гігієна
        </button>
      </div>
      <AnimateHeight
        duration={500}
        height={height}
        className='bg-green-50 md:min-h-[50px] xl:min-h-[66px]'
      >
        <div className='relative flex justify-center'>
          <Transition
            show={index === 1}
            enter='transition-opacity duration-700'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <p className='absolute left-0 top-0 w-full text-center leading-[1.364] md:px-9 md:text-[18px] xl:px-64 xl:text-2xl'>
              Тільки в нас ви можете замовити унікальний дизайн розроблений по
              ваших побажаннях.
            </p>
          </Transition>
          <Transition
            show={index === 2}
            enter='transition-opacity duration-700'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <p className='absolute left-0 top-0 w-full text-center leading-[1.364] md:px-9 md:text-[18px] xl:px-64 xl:text-2xl'>
              Завдяки нашому досвіду, таланту та професіоналізму, ми створимо
              татуювання, яке буде відображати вашу особистість, допоможе
              виразити емоції або просто прикрасить ваше тіло.
            </p>
          </Transition>
          <Transition
            show={index === 3}
            enter='transition-opacity duration-700'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='container'></div>
            <div className='absolute left-0 top-0 flex w-full justify-center md:gap-8 xl:gap-[284px]'>
              <div className='md:w-[324px] md:pl-3 xl:w-[400px]'>
                <h3 className='text-center font-medium leading-[1.364] md:mb-6 md:text-2xl xl:mb-10 xl:text-[40px]'>
                  Що потрібно
                </h3>
                <ul className='list-outside list-disc'>
                  <li className='text-left leading-[1.364] md:text-[18px] xl:text-2xl'>
                    Добре промити татуювання (бактеріальним милом, просушити
                    одноразовим полотенцем.
                  </li>
                  <li className='text-left leading-[1.364] md:text-[18px] xl:text-2xl'>
                    Нанести на місце татуювання заживляючий крем.
                  </li>
                  <li className='text-left leading-[1.364] md:text-[18px] xl:text-2xl'>
                    Поверх крему накласти одноразовий рушник або пеленку.
                  </li>
                  <li className='text-left leading-[1.364] md:text-[18px] xl:text-2xl'>
                    Зафіксувати плівкою або рулонним пластирем.
                  </li>
                </ul>
              </div>
              <div className='md:w-[304px] xl:w-[40px]'>
                <h3 className='text-center font-medium leading-[1.364] md:mb-6 md:text-2xl xl:mb-10 xl:text-[40px]'>
                  Що неможна
                </h3>
                <ul className='list-outside list-disc'>
                  <li className='text-left leading-[1.364] md:text-[18px] xl:text-2xl'>
                    Засмагати та відвідувати солярії до повного заживання
                    татуювання.
                  </li>
                  <li className='text-left leading-[1.364] md:text-[18px] xl:text-2xl'>
                    Купатись, приймати сауни та бані до повного заживання
                    татуювання.
                  </li>
                  <li className='text-left leading-[1.364] md:text-[18px] xl:text-2xl'>
                    Вживати наркотичні та медичні препарати, які розріджують
                    кров перші 3-5 днів.
                  </li>
                  <li className='text-left leading-[1.364] md:text-[18px] xl:text-2xl'>
                    Робити фізичні навантаження перші 3-5 днів.
                  </li>
                  <li className='text-left leading-[1.364] md:text-[18px] xl:text-2xl'>
                    Вживати спиртні напої, енергетики в перші 3 дні після
                    татуювання.
                  </li>
                </ul>
              </div>
            </div>
          </Transition>
        </div>
      </AnimateHeight>

      {/*<Swiper*/}
      {/*  modules={[Thumbs, Pagination]}*/}
      {/*  slidesPerView={1.5}*/}
      {/*  centeredSlides={true}*/}
      {/*  thumbs={{ swiper: thumbsSwiper }}*/}
      {/*  pagination={pagination}*/}
      {/*  breakpoints={{*/}
      {/*    768: {*/}
      {/*      slidesPerView: 1,*/}
      {/*    },*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <SwiperSlide>*/}
      {/*    <h2 className={styles.title}>Професійність</h2>*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <h2 className={styles.title}>Безпека та гігієна</h2>*/}
      {/*  </SwiperSlide>*/}
      {/*  <SwiperSlide>*/}
      {/*    <h2 className={styles.title}>Унікальний дизайн</h2>*/}
      {/*  </SwiperSlide>*/}
      {/*</Swiper>*/}

      {/*<div className='container'>*/}
      {/*  <Swiper*/}
      {/*    modules={[FreeMode, Thumbs]}*/}
      {/*    allowTouchMove={false}*/}
      {/*    onSwiper={setThumbsSwiper}*/}
      {/*    freeMode={true}*/}
      {/*    watchSlidesProgress={true}*/}
      {/*    className='innerSwiper'*/}
      {/*  >*/}
      {/*    <SwiperSlide>*/}
      {/*      <div className={clsx('wrap', styles.wrap)}>*/}
      {/*        <p className={styles.text}>*/}
      {/*          Завдяки нашому досвіду, таланту та професіоналізму, ми створимо*/}
      {/*          татуювання, яке буде відображати вашу особистість, допоможе*/}
      {/*          виразити емоції або просто прикрасить ваше тіло. */}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*    </SwiperSlide>*/}
      {/*    <SwiperSlide>*/}
      {/*      <div className={clsx('wrap', styles.wrap)}>*/}
      {/*        <div className={styles.content}>*/}
      {/*          <div className={clsx(styles.colLeft, isVisible && 'hidden')}>*/}
      {/*            <h3 className={styles.subtitle}>Що потрібно</h3>*/}
      {/*            <ul className={clsx(styles.list, styles.listMargin)}>*/}
      {/*              <li className={styles.listItem}>*/}
      {/*                Добре промити татуювання (бактеріальним милом), просушити*/}
      {/*                одноразовим полотенцем.*/}
      {/*              </li>*/}
      {/*              <li className={styles.listItem}>*/}
      {/*                Нанести на місце татуювання заживляючий крем.*/}
      {/*              </li>*/}
      {/*              <li className={styles.listItem}>*/}
      {/*                Поверх крему накласти одноразовий рушник або пеленку.*/}
      {/*              </li>*/}
      {/*              <li className={styles.listItem}>*/}
      {/*                Зафіксувати плівкою або рулонним пластирем.*/}
      {/*              </li>*/}
      {/*            </ul>*/}
      {/*            <p className={clsx(styles.text, 'mt-2.5xl xl:text-left')}>*/}
      {/*              Такі перев’язки робити кожні 6 годин*/}
      {/*            </p>*/}
      {/*          </div>*/}
      {/*          <div className={clsx(styles.colRight, !isVisible && 'hidden')}>*/}
      {/*            <h3 className={styles.subtitle}>Що неможна</h3>*/}
      {/*            <ul className={styles.list}>*/}
      {/*              <li className={styles.listItem}>*/}
      {/*                Засмагати та відвідувати солярії до повного заживання*/}
      {/*                татуювання.*/}
      {/*              </li>*/}
      {/*              <li className={styles.listItem}>*/}
      {/*                Купатись, приймати сауни та бані до повного заживання*/}
      {/*                татуювання.*/}
      {/*              </li>*/}
      {/*              <li className={styles.listItem}>*/}
      {/*                Вживати наркотичні та медичні препарати, які розріджують*/}
      {/*                кров перші 3-5 днів.*/}
      {/*              </li>*/}
      {/*              <li className={styles.listItem}>*/}
      {/*                Робити фізичні навантаження перші 3-5 днів.*/}
      {/*              </li>*/}
      {/*              <li className={styles.listItem}>*/}
      {/*                Вживати спиртні напої, енергетики в перші 3 дні після*/}
      {/*                татуювання.*/}
      {/*              </li>*/}
      {/*            </ul>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <button*/}
      {/*        className='mt-4 md:hidden'*/}
      {/*        onClick={() => setIsVisible(!isVisible)}*/}
      {/*      >*/}
      {/*        {isVisible ? (*/}
      {/*          <ChevronDoubleRightIcon className='h-8 w-10 text-white opacity-[0.14]' />*/}
      {/*        ) : (*/}
      {/*          <ChevronDoubleLeftIcon className='h-8 w-10 text-white opacity-[0.14]' />*/}
      {/*        )}*/}
      {/*      </button>*/}
      {/*    </SwiperSlide>*/}
      {/*    <SwiperSlide>*/}
      {/*      <div className={clsx('wrap', styles.wrap)}>*/}
      {/*        <p className={styles.text}>*/}
      {/*          Тільки в нас ви можете замовити унікальний дизайн розроблений по*/}
      {/*          ваших побажаннях*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*    </SwiperSlide>*/}
      {/*  </Swiper>*/}
      {/*</div>*/}
    </div>
  );
};

export default Features;
