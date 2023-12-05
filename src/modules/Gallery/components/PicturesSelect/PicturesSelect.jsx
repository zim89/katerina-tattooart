import clsx from 'clsx';
import Link from 'next/link';

import { useId } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

import styles from './PictureSelect.module.css';

const PicturesSelect = ({ className, options = [], defaultId = 0 }) => {
  const dropdownId = useId();
  const selected = options.findIndex(({ id }) => id == defaultId);

  return (
    <div className={clsx(className, styles.dropdown)}>
      <input
        className='absolute -left-[100vw]'
        type='checkbox'
        id={dropdownId}
        value=''
        name='my-checkbox'
      />
      <label
        className='relative z-[3] inline-block min-w-[137px] max-w-max cursor-pointer select-none rounded-lg bg-[#303538] p-2 pl-2.5 pt-2.5 font-medium leading-[19px] md:px-2.1 md:py-1.75 md:text-lg/[21px] xl:min-w-[274px] xl:rounded-2xl xl:p-4.5 xl:text-2xl/7'
        htmlFor={dropdownId}
        data-toggle='dropdown'
      >
        {options[selected].label || 'Виберіть...'}
        <ChevronDownIcon className='absolute right-2.5 top-2 h-6 w-6 transition-transform md:right-2.1 md:top-2.1 md:h-[1.0625rem] md:w-[1.0625rem] xl:right-4.5 xl:top-3.75 xl:h-[2.125rem] xl:w-[2.125rem]' />
      </label>
      <ul className='absolute top-[calc(100%-16px)] z-[2] w-full origin-top scale-y-0 space-y-4 rounded-b-lg bg-[#303538] px-2.5 pb-4 pt-5.5 leading-[1.1875rem] transition-transform duration-300 md:space-y-3 md:px-2.1 md:pb-2.1 md:pt-[23px] md:text-lg/5.1 xl:space-y-4.5 xl:rounded-2xl xl:rounded-t-none xl:px-4.5 xl:pb-3 xl:pt-[19px] xl:text-2xl/7'>
        {/* TypeScript тут бы помог, а так даем JS делать преобразование */}
        {options
          .filter(({ id }) => id != defaultId)
          .map((type) => (
            <li key={type.id} className='h-[19px] md:h-[21px] xl:h-[28px]'>
              <Link
                className='nav-link opacity-0 transition-opacity'
                href={`?filter=${type.id}`}
                replace
                scroll={false}
              >
                {type.label}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PicturesSelect;
