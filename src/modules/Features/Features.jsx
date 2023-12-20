'use client';
import clsx from 'clsx';
import { useState } from 'react';

const Features = () => {
  const [index, setIndex] = useState('tab1');

  return (
    <div className='mb-10 md:mb-15 xl:mb-20' id='features'>
      {/*Features Navigation*/}
      <div className='md:mb-15 md:flex md:items-baseline md:justify-center md:gap-8 xl:mb-20 xl:gap-10'>
        <button
          className={clsx(
            'relative whitespace-nowrap text-primary transition-all duration-500 hover:text-white md:text-xl xl:text-2xl',
            index !== 'tab1' &&
              'after:absolute after:-bottom-0 after:left-0 after:right-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full',
            index === 'tab1' &&
              'font-medium text-white md:text-[32px] xl:text-[40px]'
          )}
          onClick={() => setIndex('tab1')}
        >
          Унікальний дизайн
        </button>
        <button
          className={clsx(
            'relative whitespace-nowrap text-primary transition-all duration-500 hover:text-white md:text-xl xl:text-2xl',
            index !== 'tab2' &&
              'after:absolute after:-bottom-0 after:left-0 after:right-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full',
            index === 'tab2' &&
              'font-medium text-white md:text-[32px] xl:text-[40px]'
          )}
          onClick={() => setIndex('tab2')}
        >
          Професійність
        </button>
        <button
          className={clsx(
            'relative whitespace-nowrap text-primary transition-all duration-500 hover:text-white md:text-xl xl:text-2xl',
            index !== 'tab3' &&
              'after:absolute after:-bottom-0 after:left-0 after:right-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full',
            index === 'tab3' &&
              'font-medium text-white md:text-[32px] xl:text-[40px]'
          )}
          onClick={() => setIndex('tab3')}
        >
          Безпека та гігієна
        </button>
      </div>

      <div className='container'>
        {/*Features Content*/}
        <div
          className='group relative flex h-auto justify-center bg-cyan-900 transition-all duration-500 md:data-[active=tab1]:h-[49px] md:data-[active=tab2]:h-[74px] md:data-[active=tab3]:h-[329px] xl:data-[active=tab1]:h-[64px] xl:data-[active=tab2]:h-[96px] xl:data-[active=tab3]:h-[455px]'
          data-active={index}
        >
          {/*Tab1*/}
          <p className='absolute left-0 top-0 w-full bg-red-500/30 text-center leading-[1.364] opacity-0 transition-all duration-500 group-data-[active=tab1]:opacity-100 md:px-0 md:text-[18px] xl:px-36 xl:text-2xl'>
            Тільки в нас ви можете замовити унікальний дизайн розроблений по
            ваших побажаннях.
          </p>

          {/*Tab2*/}
          <p className='absolute left-0 top-0 bg-red-500/30 text-center leading-[1.364] opacity-0 transition-all duration-500 group-data-[active=tab2]:opacity-100 md:px-0 md:text-[18px] xl:px-36 xl:text-2xl'>
            Завдяки нашому досвіду, таланту та професіоналізму, ми створимо
            татуювання, яке буде відображати вашу особистість, допоможе виразити
            емоції або просто прикрасить ваше тіло.
          </p>

          {/*Tab3*/}
          <div className='absolute left-0 top-0 w-full bg-red-500/30 opacity-0 transition-all duration-500 group-data-[active=tab3]:opacity-100'>
            <div className='md:flex md:flex-row md:justify-center md:gap-8 xl:gap-[12.5rem]'>
              <div className='md:block xl:w-[456px]'>
                <h3 className='mb-8 text-center text-2xl font-medium text-gray md:mb-6 md:text-2xl/[32.736px] xl:mb-10 xl:text-4.5xl/[54.56px]'>
                  Що потрібно
                </h3>
                <ul className='list-outside list-disc md:mb-6.5 md:ml-3.75 xl:ml-4.5'>
                  <li className='text-left text-base/[25.664px] font-normal text-gray md:text-lg/[24.552px] xl:text-2xl/[32.736px]'>
                    Добре промити татуювання (бактеріальним милом), просушити
                    одноразовим полотенцем.
                  </li>
                  <li className='text-left text-base/[25.664px] font-normal text-gray md:text-lg/[24.552px] xl:text-2xl/[32.736px]'>
                    Нанести на місце татуювання заживляючий крем.
                  </li>
                  <li className='text-left text-base/[25.664px] font-normal text-gray md:text-lg/[24.552px] xl:text-2xl/[32.736px]'>
                    Поверх крему накласти одноразовий рушник або пеленку.
                  </li>
                  <li className='text-left text-base/[25.664px] font-normal text-gray md:text-lg/[24.552px] xl:text-2xl/[32.736px]'>
                    Зафіксувати плівкою або рулонним пластирем.
                  </li>
                </ul>
                <p className='text-base/[25.664px] font-normal text-gray md:text-lg/[24.552px] xl:text-left xl:text-2xl/[32.736px]'>
                  Такі перев’язки робити кожні 6 годин
                </p>
              </div>

              <div className='md:block xl:w-[440px]'>
                <h3 className='mb-8 text-center text-2xl font-medium text-gray md:mb-6 md:text-2xl/[32.736px] xl:mb-10 xl:text-4.5xl/[54.56px]'>
                  Що неможна
                </h3>
                <ul className='mx-auto list-outside list-disc'>
                  <li className='text-left text-base/[25.664px] font-normal text-gray md:text-lg/[24.552px] xl:text-2xl/[32.736px]'>
                    Засмагати та відвідувати солярії до повного заживання
                    татуювання.
                  </li>
                  <li className='text-left text-base/[25.664px] font-normal text-gray md:text-lg/[24.552px] xl:text-2xl/[32.736px]'>
                    Купатись, приймати сауни та бані до повного заживання
                    татуювання.
                  </li>
                  <li className='text-left text-base/[25.664px] font-normal text-gray md:text-lg/[24.552px] xl:text-2xl/[32.736px]'>
                    Вживати наркотичні та медичні препарати, які розріджують
                    кров перші 3-5 днів.
                  </li>
                  <li className='text-left text-base/[25.664px] font-normal text-gray md:text-lg/[24.552px] xl:text-2xl/[32.736px]'>
                    Робити фізичні навантаження перші 3-5 днів.
                  </li>
                  <li className='text-left text-base/[25.664px] font-normal text-gray md:text-lg/[24.552px] xl:text-2xl/[32.736px]'>
                    Вживати спиртні напої, енергетики в перші 3 дні після
                    татуювання.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
