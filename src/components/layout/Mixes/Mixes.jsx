'use client';
import { useEffect, useRef } from 'react';

const Mixes = () => {
  const rectRef = useRef(null);
  useEffect(() => {
    const width = rectRef.current.offsetWidth;
  }, [rectRef.current]);

  return (
    <div className='w-full flex items-start gap-2' ref={rectRef}>
      <div className='flex-1 min-w-md'>
        <div className='h-12 w-full bg-red-500 mt-1 mr-1'></div>
      </div>
      <div className='flex-1 min-w-md'>
        <div className='h-12 w-full bg-sky-500 mt-1 mr-1'></div>
      </div>
    </div>
  );
};

export default Mixes;
