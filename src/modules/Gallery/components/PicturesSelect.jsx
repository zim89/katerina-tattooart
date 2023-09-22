'use client';

import clsx from 'clsx';
import makeAnimated from 'react-select/animated';
import Select, { components } from 'react-select';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const options = [
  { value: 'all', label: 'Усі' },
  { value: 'legs', label: 'На нозі' },
  { value: 'hands', label: 'На руці' },
  { value: 'back', label: 'На спині' },
  { value: 'body', label: 'На тулубі' },
  { value: 'shoulders', label: 'На плечах' },
  { value: 'neck', label: 'На шиї' },
];

const DropdownIndicator = (props) => {
  const { menuIsOpen } = props.selectProps;

  return (
    <components.DropdownIndicator {...props}>
      <ChevronDownIcon
        className={clsx(
          'absolute right-2.5 top-2 h-6 w-6 transition-transform md:right-[9px] md:top-[11px] md:h-[17px] md:w-[17px] xl:right-[18px] xl:top-[15px] xl:h-[34px] xl:w-[34px]',
          menuIsOpen && '-scale-y-100'
        )}
      />
    </components.DropdownIndicator>
  );
};

const PicturesSelect = ({ className }) => {
  return (
    <Select
      unstyled
      defaultValue={options[2]}
      options={options}
      components={{ DropdownIndicator }}
      className={`${className || ''} relative z-10`}
      classNames={{
        control: (state) =>
          clsx(
            'p-2 bg-[#303538] rounded-lg max-w-max min-w-[137px] leading-[19px] md:text-lg/[21px] md:px-[9px] md:py-[7px] xl:p-[18px] xl:text-2xl/7 xl:min-w-[274px]',
            state.menuIsOpen && 'rounded-b-none'
          ),
        menuList: () =>
          'bg-[#303538] px-2.5 pb-4 pt-1.5 space-y-4 md:space-y-3 xl:space-y-[18px] md:px-[9px] md:pb-[9px] md:pt-[7px] xl:px-[18px] xl:pb-3 xl:pt-0 rounded-b-lg leading-[19px] md:text-lg/[21px] xl:text-2xl/[28px] !max-h-none',
        indicatorsContainer: () => 'h-0',
      }}
    />
  );
};

export default PicturesSelect;
