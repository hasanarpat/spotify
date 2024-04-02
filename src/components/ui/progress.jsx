'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/lib/utils';

const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      'relative h-[6px] w-full overflow-hidden rounded-full bg-primary/20',
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className='h-full w-full flex-1 bg-white hover:bg-green-600 transition-all'
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
    <div
      className={cn(
        'w-4 h-4 rounded-full absolute z-20 bg-white bottom-0 hover:bg-green-600',
        `right-[${100 - (100 - (value || 0))}%]`
      )}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
