'use client';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

const Suggestion = () => {
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

  const tags = Array.from({ length: Math.floor(width / 175) }).map(
    (_, i, a) => `${a.length - i}`
  );
  console.log(tags);

  return (
    <div className='flex gap-1 w-full' ref={ref}>
      {/* for multiple sizes (widths) change number of suggestions like on spotify */}
      {/* MAP ON HERE FOR A NUMBER TO DISPLAY AS MUCH AS NUMBER */}
      {/* <div className='flex flex-col items-start w-full hover:bg-zinc-500/20 p-2 rounded-md relative group'>
          <div className='w-full aspect-square relative rounded-lg'>
            <Image
              alt='album'
              src='https://images.unsplash.com/photo-1526656001029-20a71b17f7ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              fill
              className='object-cover rounded-lg'
            />
          </div>
          <h5 className='font-semibold mt-2'>Daily Mix 1</h5>
          <p className='text-sm text-zinc-500'>
            Cem Karaca, Hande Mehan, Yavuz Çetin ve daha fazlası
          </p>
          <Button
            variant='ghost'
            className='absolute right-2 top-1/2 mt-2 bg-green-500 rounded-full p-0 w-14 h-14 aspect-square hover:scale-105 hover:bg-green-400 hidden group-hover:flex transition-all duration-200 ease-in'
          >
            <Play className='fill-black stroke-black' />
          </Button>
        </div> */}
      {tags.map((item) => (
        <>
          <div className='flex flex-col items-start w-full hover:bg-zinc-500/20 p-2 rounded-md relative group'>
            <div className='w-full aspect-square relative rounded-lg'>
              <Image
                alt='album'
                src='https://images.unsplash.com/photo-1526656001029-20a71b17f7ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                fill
                className='object-cover rounded-lg'
              />
            </div>
            <h5 className='font-semibold mt-2'>Daily Mix 1</h5>
            <p className='text-sm text-zinc-500'>
              Cem Karaca, Hande Mehan, Yavuz Çetin ve daha fazlası
            </p>
            <Button
              variant='ghost'
              className='absolute right-2 top-1/2 mt-2 bg-green-500 rounded-full p-0 w-14 h-14 aspect-square hover:scale-105 hover:bg-green-400 hidden group-hover:flex transition-all duration-200 ease-in'
            >
              <Play className='fill-black stroke-black' />
            </Button>
          </div>
        </>
      ))}
    </div>
  );
};

export default Suggestion;
