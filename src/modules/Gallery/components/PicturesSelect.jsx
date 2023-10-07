'use client';

import clsx from 'clsx';
import Select, { components } from 'react-select';
import { useId } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const DropdownIndicator = (props) => {
  const { menuIsOpen } = props.selectProps;

  return (
    <components.DropdownIndicator {...props}>
      <ChevronDownIcon
        className={clsx(
          'absolute right-2.5 top-2 h-6 w-6 transition-transform md:right-[9px] md:top-[11px] md:h-[17px] md:w-[17px] xl:right-4.5 xl:top-3.75 xl:h-[34px] xl:w-[34px]',
          menuIsOpen && '-scale-y-100'
        )}
      />
    </components.DropdownIndicator>
  );
};

const PicturesSelect = ({ className, options = [], onSelect }) => {
  const selectId = useId();
  return (
    <Select
      unstyled
      placeholder='Виберіть...'
      instanceId={selectId}
      defaultValue={options[0]}
      options={options}
      onChange={onSelect}
      components={{ DropdownIndicator }}
      className={`${className || ''} z-[2]`}
      classNames={{
        control: (state) =>
          clsx(
            'p-2 bg-[#303538] rounded-lg max-w-max min-w-[137px] leading-[19px] md:text-lg/[21px] md:px-[9px] md:py-1.75 xl:p-4.5 xl:text-2xl/7 xl:min-w-[274px]',
            state.menuIsOpen && 'rounded-b-none'
          ),
        menuList: () =>
          'bg-[#303538] px-2.5 pb-4 pt-1.5 space-y-4 md:space-y-3 xl:space-y-4.5 md:px-[9px] md:pb-[9px] md:pt-1.75 xl:px-4.5 xl:pb-3 xl:pt-0 rounded-b-lg leading-[19px] md:text-lg/[21px] xl:text-2xl/[28px] !max-h-none',
        indicatorsContainer: () => 'h-0',
      }}
    />
  );
};

export default PicturesSelect;
