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
          'absolute right-2.5 top-2 h-6 w-6 transition-transform',
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
      className={`${className} relative z-10`}
      classNames={{
        control: (state) =>
          clsx(
            'p-2 bg-[#303538] rounded-lg max-w-max min-w-[137px] leading-[19px]',
            state.menuIsOpen && 'rounded-b-none'
          ),
        menuList: () =>
          'bg-[#303538] px-2.5 pb-4 pt-1.5 space-y-4 rounded-b-lg',
      }}
    />
  );
};

export default PicturesSelect;
