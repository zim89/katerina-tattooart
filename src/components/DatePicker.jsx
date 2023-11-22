'use client';

import * as React from 'react';

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export function DatePicker({ date, onDateChange, ...props }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className='md:h-14 md:px-7' size='icon'>
          <CalendarIcon className='h-6 w-6' />
          <span className='ml-4 hidden font-inter text-lg/tight md:inline'>
            {date ? format(date, 'dd.MM.yy') : 'Дата'}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align='start'
        className='flex w-auto flex-col items-center p-0 pt-3 md:border md:border-primary'
      >
        <div className='flex items-center md:mb-4'>
          <CalendarIcon className='h-7 w-7 md:h-6 md:w-6' />
          <span className='ml-4 hidden font-inter text-lg/tight md:inline'>
            {date ? format(date, 'dd.MM.yy') : 'Дата'}
          </span>
        </div>
        <Calendar
          mode='single'
          onSelect={onDateChange}
          selected={date}
          initialFocus
          {...props}
        />
      </PopoverContent>
    </Popover>
  );
}
