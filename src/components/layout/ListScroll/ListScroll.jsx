'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Search, List } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);
const ListScroll = () => {
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

  const [openSearch, setOpenSearch] = useState(false);

  return (
    <div className='w-full flex flex-col gap-2' ref={ref}>
      <div
        className={cn(
          'font-semibold flex items-center gap-2 px-2',
          width < 200 && 'hidden'
        )}
      >
        <Button
          className='bg-zinc-700 bg-opacity-75 hover:bg-zinc-700/50 text-white rounded-full px-2 h-7'
          variant='small'
        >
          Çalma Listeleri
        </Button>
        <Button
          className='bg-zinc-700 bg-opacity-75 hover:bg-zinc-700/50 text-white rounded-full px-2 h-7'
          variant='small'
        >
          Sanatçılar
        </Button>
        <Button
          className='bg-zinc-700 bg-opacity-75 hover:bg-zinc-700/50 text-white rounded-full px-2 h-7'
          variant='small'
        >
          Albümler
        </Button>
      </div>
      <div
        className={cn(
          'font-medium text-sm text-primary-foreground cursor-pointer flex items-center justify-between w-full mt-2',
          width < 200 && 'hidden'
        )}
      >
        <div>
          {openSearch ? (
            <div className='relative w-full flex bg-zinc-800/60'>
              <Search
                className='hover:scale-105 hover:text-white hover:bg-zinc-500/50 rounded-full p-2 w-9 h-9 absolute left-0'
                onClick={() => setOpenSearch(false)}
              />
              <Input
                type='text'
                placeholder='Kitaplığında Ara'
                className='pl-8'
              />
            </div>
          ) : (
            <Search
              className='hover:scale-105 hover:text-white hover:bg-zinc-500/50 rounded-full p-2 w-9 h-9'
              onClick={() => setOpenSearch(true)}
            />
          )}
        </div>
        <div className='flex items-center gap-2 hover:text-white '>
          <span>Son Çalınanlar</span>
          <List />
        </div>
      </div>
      <ScrollArea className='h-1/2 w-full rounded-md'>
        <div className='pr-2'>
          {tags.map((tag) => (
            <Link
              key={tag}
              href=''
              className={cn(
                'text-sm hover:bg-gray-800/30 p-2 flex items-center justify-between rounded-md',
                width < 200 && 'justify-center'
              )}
            >
              <div className='flex gap-3'>
                <Image
                  alt='album'
                  src='https://images.unsplash.com/photo-1526656001029-20a71b17f7ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  width={60}
                  height={60}
                  className='object-cover aspect-square rounded-sm'
                />
                <div
                  className={cn(
                    'flex flex-col gap-1 text-primary-foreground',
                    width < 200 && 'hidden'
                  )}
                >
                  <span className='text-white text-base'>
                    Beğenilen Şarkılar
                  </span>
                  <span>Çalma Listesi 327 Şarkı</span>
                </div>
              </div>
              {width < 200 ? <></> : tag.slice(0, 3)}
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ListScroll;
