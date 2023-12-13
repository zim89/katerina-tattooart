'use client';
import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';

const lang = [{ name: 'UA' }, { name: 'PL' }, { name: 'EN' }];

const LangSelect = ({ row }) => {
  const [selected, setSelected] = useState(lang[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className='relative flex items-center'>
        <Listbox.Button className='relative w-[22px] cursor-pointer text-[14px] transition-colors hover:text-white xl:text-[18px]'>
          {selected.name}
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options
            className={
              row
                ? 'absolute -right-[51px] top-0 flex flex-row gap-2 text-[14px]'
                : 'absolute left-0 top-[22px] flex w-full flex-col gap-1 pl-[1px]  text-[14px] xl:top-[27px] xl:mt-[3px] xl:gap-2 xl:text-[18px]'
            }
          >
            {lang
              .filter(({ name }) => name !== selected.name)
              .map((lang, idx) => (
                <Listbox.Option
                  key={idx}
                  className={({ active }) => ``}
                  value={lang}
                >
                  {({ selected }) => (
                    <span
                      className={`cursor-pointer transition-colors hover:text-white`}
                    >
                      {lang.name}
                    </span>
                  )}
                </Listbox.Option>
              ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default LangSelect;
