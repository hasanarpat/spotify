'use client';
import { LibraryBig, Plus, ArrowRight } from 'lucide-react';
import ListScroll from '@/components/layout/ListScroll/ListScroll';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export const Library = () => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const resizeObserver = new ResizeObserver(() => {
      if (ref.current) {
        const { current } = ref;
        const boundingRect = current.getBoundingClientRect();
        const { width } = boundingRect;
        setWidth(Math.round(width));
        console.log(width);
      }
    });
    resizeObserver.observe(ref.current);
    return () => resizeObserver.disconnect();
  }, [ref]);

  return (
    <div
      className='flex flex-col items-start justify-start gap-4 p-3 bg-primary rounded-xl'
      ref={ref}
    >
      <div className='flex items-center justify-between w-full p-2'>
        <span
          className={cn(
            'flex items-center justify-between gap-2 text-primary-foreground hover:text-white font-semibold text-md cursor-pointer',
            width < 200 && 'justify-center w-full'
          )}
        >
          <LibraryBig className={width < 200 && 'h-7 w-7'} />
          <span className={cn(width > 200 ? '' : 'hidden')}>Kitaplığın</span>
        </span>
        <span
          className={cn(
            'flex items-center gap-3 text-primary-foreground hover:text-white',
            width < 200 && 'hidden'
          )}
        >
          <span className='text-primary-foreground hover:text-white cursor-pointer'>
            <Plus />
          </span>
          <span className='text-primary-foreground hover:text-white cursor-pointer'>
            <ArrowRight />
          </span>
        </span>
      </div>
      <ListScroll />
    </div>
  );
};
