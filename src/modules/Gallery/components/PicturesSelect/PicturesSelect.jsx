import clsx from 'clsx';
import Link from 'next/link';

import { useId } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

import styles from './PictureSelect.module.css';

const PicturesSelect = ({ className, options = [], defaultId = 0 }) => {
  const dropdownId = useId();

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
        className='relative inline-block min-w-[137px] max-w-max cursor-pointer rounded-lg bg-[#303538] p-2 pl-2.5 pt-2.5 font-medium leading-[19px] md:px-2.1 md:py-1.75 md:text-lg/[21px] xl:min-w-[274px] xl:rounded-2xl xl:p-4.5 xl:text-2xl/7'
        htmlFor={dropdownId}
        data-toggle='dropdown'
      >
        {options[defaultId].label || 'Виберіть...'}
        <ChevronDownIcon className='absolute right-2.5 top-2 h-6 w-6 transition-transform md:right-2.1 md:top-2.1 md:h-[1.0625rem] md:w-[1.0625rem] xl:right-4.5 xl:top-3.75 xl:h-[2.125rem] xl:w-[2.125rem]' />
      </label>
      <ul className='absolute z-10 w-full scale-y-0 space-y-4 rounded-b-lg bg-[#303538] px-2.5 pb-4 pt-1.5 leading-[1.1875rem] md:space-y-3 md:px-2.1 md:pb-2.1 md:pt-1.75 md:text-lg/5.1 xl:space-y-4.5 xl:rounded-2xl xl:rounded-t-none xl:px-4.5 xl:pb-3 xl:pt-[0.1875rem] xl:text-2xl/7'>
        {options.map((type) => (
          <li key={type.id}>
            <Link
              className='nav-link'
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
