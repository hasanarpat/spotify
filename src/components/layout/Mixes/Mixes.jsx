'use client';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Mixes = () => {
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
      className={cn('w-full grid gap-2', width < 800 ? 'grid-cols-2' : '')}
      ref={ref}
    >
      <div className='grid w-full gap-2'>
        <div
          className={cn(
            'w-full grid gap-1',
            width < 800 ? 'grid-cols-1 h-64' : 'grid-cols-4 h-16'
          )}
        >
          <div className='w-full h-full bg-zinc-700/20 bg-opacity-45 hover:bg-zinc-400/10 rounded-md justify-between  flex items-center gap-2'>
            <div className='flex items-center gap-2'>
              <div className='rounded-sm relative w-[64px] h-[64px]'>
                <Image
                  alt='album'
                  src='https://images.unsplash.com/photo-1526656001029-20a71b17f7ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  fill
                  className='object-cover rounded-sm'
                />
              </div>
              <span className='text-sm text-primary-foreground/10'>
                Hüzünlü Mix
              </span>
            </div>
            <div className='text-green-600 mr-2'></div>
          </div>{' '}
          <div className='w-full h-full bg-zinc-700/20 bg-opacity-45 hover:bg-zinc-400/10 rounded-md justify-between  flex items-center gap-2'>
            <div className='flex items-center gap-2'>
              <div className='rounded-sm relative w-[64px] h-[64px]'>
                <Image
                  alt='album'
                  src='https://images.unsplash.com/photo-1526656001029-20a71b17f7ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  fill
                  className='object-cover rounded-sm'
                />
              </div>
              <span className='text-sm text-primary-foreground/10'>
                Hüzünlü Mix
              </span>
            </div>
            <div className='text-green-600 mr-2'></div>
          </div>{' '}
          <div className='w-full h-full bg-zinc-700/20 bg-opacity-45 hover:bg-zinc-400/10 rounded-md justify-between  flex items-center gap-2'>
            <div className='flex items-center gap-2'>
              <div className='rounded-sm relative w-[64px] h-[64px]'>
                <Image
                  alt='album'
                  src='https://images.unsplash.com/photo-1526656001029-20a71b17f7ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  fill
                  className='object-cover rounded-sm'
                />
              </div>
              <span className='text-sm text-primary-foreground/10'>
                Hüzünlü Mix
              </span>
            </div>
            <div className='text-green-600 mr-2'></div>
          </div>{' '}
          <div className='w-full h-full bg-zinc-700/20 bg-opacity-45 hover:bg-zinc-400/10 rounded-md justify-between  flex items-center gap-2'>
            <div className='flex items-center gap-2'>
              <div className='rounded-sm relative w-[64px] h-[64px]'>
                <Image
                  alt='album'
                  src='https://images.unsplash.com/photo-1526656001029-20a71b17f7ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  fill
                  className='object-cover rounded-sm'
                />
              </div>
              <span className='text-sm text-primary-foreground/10'>
                Hüzünlü Mix
              </span>
            </div>
            <div className='text-green-600 mr-2'></div>
          </div>
        </div>
      </div>
      <div className='grid w-full gap-2'>
        <div
          className={cn(
            'w-full grid gap-1',
            width < 800 ? 'grid-cols-1 h-64' : 'grid-cols-4 h-16'
          )}
        >
          <div className='w-full h-full bg-zinc-700/20 bg-opacity-45 hover:bg-zinc-400/10 rounded-md justify-between  flex items-center gap-2'>
            <div className='flex items-center gap-2'>
              <div className='rounded-sm relative w-[64px] h-[64px]'>
                <Image
                  alt='album'
                  src='https://images.unsplash.com/photo-1526656001029-20a71b17f7ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  fill
                  className='object-cover rounded-sm'
                />
              </div>
              <span className='text-sm text-primary-foreground/10'>
                Hüzünlü Mix
              </span>
            </div>
            <div className='text-green-600 mr-2'></div>
          </div>{' '}
          <div className='w-full h-full bg-zinc-700/20 bg-opacity-45 hover:bg-zinc-400/10 rounded-md justify-between  flex items-center gap-2'>
            <div className='flex items-center gap-2'>
              <div className='rounded-sm relative w-[64px] h-[64px]'>
                <Image
                  alt='album'
                  src='https://images.unsplash.com/photo-1526656001029-20a71b17f7ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  fill
                  className='object-cover rounded-sm'
                />
              </div>
              <span className='text-sm text-primary-foreground/10'>
                Hüzünlü Mix
              </span>
            </div>
            <div className='text-green-600 mr-2'></div>
          </div>{' '}
          <div className='w-full h-full bg-zinc-700/20 bg-opacity-45 hover:bg-zinc-400/10 rounded-md justify-between  flex items-center gap-2'>
            <div className='flex items-center gap-2'>
              <div className='rounded-sm relative w-[64px] h-[64px]'>
                <Image
                  alt='album'
                  src='https://images.unsplash.com/photo-1526656001029-20a71b17f7ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  fill
                  className='object-cover rounded-sm'
                />
              </div>
              <span className='text-sm text-primary-foreground/10'>
                Hüzünlü Mix
              </span>
            </div>
            <div className='text-green-600 mr-2'></div>
          </div>{' '}
          <div className='w-full h-full bg-zinc-700/20 bg-opacity-45 hover:bg-zinc-400/10 rounded-md justify-between  flex items-center gap-2'>
            <div className='flex items-center gap-2'>
              <div className='rounded-sm relative w-[64px] h-[64px]'>
                <Image
                  alt='album'
                  src='https://images.unsplash.com/photo-1526656001029-20a71b17f7ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  fill
                  className='object-cover rounded-sm'
                />
              </div>
              <span className='text-sm text-primary-foreground/10'>
                Hüzünlü Mix
              </span>
            </div>
            <div className='text-green-600 mr-2'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mixes;
