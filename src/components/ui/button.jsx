import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import * as React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-time hover:bg-primary/90 dark:bg-time dark:text-primary dark:hover:bg-time/90',
        destructive:
          'bg-red-500 text-time hover:bg-red-500/90 dark:bg-red-900 dark:text-time dark:hover:bg-red-900/90',
        outline:
          'border border-slate-200 bg-white hover:bg-slate-100 hover:text-primary dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-time',
        secondary:
          'bg-slate-100 text-primary hover:bg-slate-100/80 dark:bg-slate-800 dark:text-time dark:hover:bg-slate-800/80',
        ghost:
          'hover:bg-slate-100 hover:text-primary dark:hover:bg-slate-800 dark:hover:text-time',
        link: 'text-primary underline-offset-4 hover:underline dark:text-time',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-11 rounded-2xl px-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
