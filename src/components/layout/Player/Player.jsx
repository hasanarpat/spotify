import Image from 'next/image';
import Link from 'next/link';
import { Slider } from '@/components/ui/slider';
import {
  Shuffle,
  Play,
  ChevronDown,
  SkipBack,
  SkipForward,
  Repeat,
  Speaker,
  MicVocal,
  ListMusic,
  MonitorPlay,
  Volume2,
  Cast,
  Maximize2,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Player = () => {
  return (
    <div className='absolute bottom-0 bg-background w-full h-20 p-2 px-4'>
      <div className='w-full h-full flex items-center justify-between'>
        <div className='flex gap-3'>
          <div className='relative w-14 h-14 group'>
            <Image
              alt='album'
              src='https://images.unsplash.com/photo-1526656001029-20a71b17f7ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              fill
              className='object-cover aspect-square rounded-sm'
            />
            <ChevronDown className='absolute hidden group-hover:block bg-primary text-white/70 hover:text-white rounded-full p-1 h-6 w-6 right-0 hover:scale-105' />
          </div>
          <div className='flex flex-col justify-center text-primary-foreground'>
            <Link
              href='/go-to-album'
              className='text-white text-sm hover:underline'
            >
              Eveyone I love Is Dead
            </Link>
            <Link
              href='/go-to-artist'
              className='text-xs hover:text-white hover:underline'
            >
              Type O Negative
            </Link>
          </div>
        </div>
        <div className='w-2/5'>
          <div className='flex flex-col justify-center gap-3'>
            <div className='flex items-center justify-center gap-5'>
              <Shuffle className='h-5 w-5 text-accent/50 hover:text-white hover:scale-110' />
              <SkipBack className='h-5 w-5 text-accent/50 hover:text-white fill-white hover:scale-110' />
              <Play className='h-5 w-5 text-white fill-white hover:scale-110' />
              <SkipForward className='h-5 w-5 text-accent/50 hover:text-white fill-white hover:scale-110' />
              <Repeat className='h-5 w-5 text-accent/50 hover:text-white hover:scale-110' />
            </div>
            <div className='flex items-center gap-2 text-xs font-semibold'>
              <span className='text-accent/50'>1:43</span>
              <Slider
                defaultValue={[50]}
                max={100}
                step={1}
                className={cn('bg-primary h-1')}
              />
              <span className='text-accent/50'>2:47</span>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='flex gap-4 items-center'>
            <Speaker className='h-4 w-4 text-accent/50 hover:text-white hover:scale-110' />
            <MicVocal className='h-4 w-4 text-accent/50 hover:text-white hover:scale-110' />
            <ListMusic className='h-4 w-4 text-accent/50 hover:scale-110' />
            <MonitorPlay className='h-4 w-4 text-accent/50 hover:text-white hover:scale-110' />
            <div className='flex items-center gap-1'>
              <Volume2 className='h-6 w-6 text-accent/50 hover:text-white hover:scale-110' />
              <Slider
                defaultValue={[50]}
                max={100}
                step={1}
                className={cn('w-16 bg-secondary h-0.5')}
              />
            </div>
            <Cast className='h-4 w-4 text-white hover:scale-110' />
            <Maximize2 className='h-4 w-4 text-accent/50 hover:text-white hover:scale-110' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
