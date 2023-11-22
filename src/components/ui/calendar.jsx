'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

function Calendar({
  className,
  classNames,
  showOutsideDays = false,
  ...props
}) {
  return (
    <DayPicker
      classNames={{
        caption: 'flex justify-center py-1 relative items-center',
        caption_label: 'capitalize leading-[1.7775] md:text-lg',

        nav: 'space-x-1 flex items-center',
        nav_button:
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 disabled:hidden',
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',

        table: 'w-full border-collapse',

        head_row: 'flex',
        head_cell:
          'font-semibold py-2.5 px-3.75 uppercase [&:nth-child(n+6)]:text-brand-red md:py-3 md:px-4',

        row: 'flex justify-stretch',
        cell: cn(
          'relative h-[43px] h-[48px] flex items-center justify-center flex-1 leading-[1.33333] text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:nth-child(n+6)]:text-brand-red',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-md'
        ),

        day: 'w-full h-auto aspect-square rounded-full aria-selected:opacity-100',
        day_range_start: 'day-range-start',
        day_range_end: 'day-range-end',
        day_selected:
          'bg-brand-blue hover:bg-brand-blue/90 focus:bg-brand-blue/90',
        day_outside: 'opacity-[35%]',
        day_disabled: 'opacity-[35%]',
        day_range_middle:
          'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className='h-4 w-4' />,
        IconRight: ({ ...props }) => <ChevronRight className='h-4 w-4' />,
      }}
      formatters={{
        formatWeekdayName: (date, options) => format(date, 'EEEEE', options),
      }}
      className={cn('p-1.75 font-inter md:p-2', className)}
      locale={uk}
      showOutsideDays={showOutsideDays}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
