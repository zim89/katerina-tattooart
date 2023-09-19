'use client';

import clsx from 'clsx';
import { useState } from 'react';

import { Thumbs, FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';

import styles from './styles/styles.module.css';

import 'swiper/css';

const Features = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

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

  return (
    <div className='section'>
      <Swiper
        modules={[Thumbs, Pagination]}
        slidesPerView={1.5}
        centeredSlides={true}
        thumbs={{ swiper: thumbsSwiper }}
        pagination={pagination}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <h2 className={styles.title}>Професійність</h2>
        </SwiperSlide>
        <SwiperSlide>
          <h2 className={styles.title}>Безпека та гігієна</h2>
        </SwiperSlide>
        <SwiperSlide>
          <h2 className={styles.title}>Унікальний дизайн</h2>
        </SwiperSlide>
      </Swiper>

      <div className='container'>
        <Swiper
          modules={[FreeMode, Thumbs]}
          allowTouchMove={false}
          onSwiper={setThumbsSwiper}
          freeMode={true}
          watchSlidesProgress={true}
          className='innerSwiper'
        >
          <SwiperSlide>
            <div className={clsx('wrap', styles.wrap)}>
              <p className={styles.text}>
                Завдяки нашому досвіду, таланту та професіоналізму, ми створимо
                татуювання, яке буде відображати вашу особистість, допоможе
                виразити емоції або просто прикрасить ваше тіло. 
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={clsx('wrap', styles.wrap)}>
              <div className={styles.content}>
                <div className={clsx(styles.colLeft, isVisible && 'hidden')}>
                  <h3 className={styles.subtitle}>Що потрібно</h3>
                  <ul className={clsx(styles.list, styles.listMargin)}>
                    <li className={styles.listItem}>
                      Добре промити татуювання (бактеріальним милом), просушити
                      одноразовим полотенцем.
                    </li>
                    <li className={styles.listItem}>
                      Нанести на місце татуювання заживляючий крем.
                    </li>
                    <li className={styles.listItem}>
                      Поверх крему накласти одноразовий рушник або пеленку.
                    </li>
                    <li className={styles.listItem}>
                      Зафіксувати плівкою або рулонним пластирем.
                    </li>
                  </ul>
                  <p className={clsx(styles.text, 'mt-[32px] xl:text-left')}>
                    Такі перев’язки робити кожні 6 годин
                  </p>
                </div>
                <div className={clsx(styles.colRight, !isVisible && 'hidden')}>
                  <h3 className={styles.subtitle}>Що неможна</h3>
                  <ul className={styles.list}>
                    <li className={styles.listItem}>
                      Засмагати та відвідувати солярії до повного заживання
                      татуювання.
                    </li>
                    <li className={styles.listItem}>
                      Купатись, приймати сауни та бані до повного заживання
                      татуювання.
                    </li>
                    <li className={styles.listItem}>
                      Вживати наркотичні та медичні препарати, які розріджують
                      кров перші 3-5 днів.
                    </li>
                    <li className={styles.listItem}>
                      Робити фізичні навантаження перші 3-5 днів.
                    </li>
                    <li className={styles.listItem}>
                      Вживати спиртні напої, енергетики в перші 3 дні після
                      татуювання.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <button
              className='mt-4 md:hidden'
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? (
                <ChevronDoubleRightIcon className='h-8 w-10 text-white opacity-[0.14]' />
              ) : (
                <ChevronDoubleLeftIcon className='h-8 w-10 text-white opacity-[0.14]' />
              )}
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <div className={clsx('wrap', styles.wrap)}>
              <p className={styles.text}>
                Тільки в нас ви можете замовити унікальний дизайн розроблений по
                ваших побажаннях
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Features;
