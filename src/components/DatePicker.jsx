'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

// import { cn } from '@/lib/utils';
// import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import * as React from 'react';

export function DatePicker({ date, onDateChange, ...props }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size='icon'>
          <CalendarIcon className='h-6 w-6' />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align='start'
        className='flex w-auto flex-col items-center p-0 pt-3'
      >
        <CalendarIcon className='h-7 w-7' />
        <Calendar
          mode='single'
          selected={date}
          onSelect={onDateChange}
          initialFocus
          {...props}
        />
      </PopoverContent>
    </Popover>
  );
}
