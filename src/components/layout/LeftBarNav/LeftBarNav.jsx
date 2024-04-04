'use client';
import Link from 'next/link';
import { Home, Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export const LeftBarNav = () => {
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
      }
    });
    resizeObserver.observe(ref.current);
    return () => resizeObserver.disconnect();
  }, [ref]);

  return (
    <div
      className='flex flex-col items-start justify-center gap-6 h-[110px] p-6 bg-primary rounded-xl text-primary-foreground'
      ref={ref}
    >
      <Link href='/' className='w-full'>
        <span
          className={cn(
            'flex items-center gap-5 hover:text-white font-semibold text-md',
            width > 200 ? '' : 'justify-center w-full'
          )}
        >
          <Home className={cn('inline', width < 200 && 'h-7 w-7')} />{' '}
          <span className={cn(width > 200 ? '' : 'hidden')}>Ana sayfa</span>
        </span>
      </Link>
      <Link href='/search' className='w-full'>
        <span
          className={cn(
            'flex items-center gap-5 hover:text-white font-semibold text-md',
            width > 200 ? '' : 'justify-center w-full'
          )}
        >
          <Search className={cn('inline', width < 200 && 'h-7 w-7')} />
          <span className={cn(width > 200 ? '' : 'hidden')}>Ara</span>
        </span>
      </Link>
    </div>
  );
};
