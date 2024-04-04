import Link from 'next/link';
import Image from 'next/image';
import { X, CirclePlus, Ellipsis, Music3, Play } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const PlayingNow = () => {
  return (
    <div className='p-5 px-3'>
      <ScrollArea className='h-[calc(100svh-96px)] w-full rounded-md pb-5'>
        <div className='pr-4'>
          <div className='flex items-start justify-between'>
            <Link
              href='/sarki-id'
              className='text-white font-semibold text-justify'
            >
              Everyone I Love Is Dead
            </Link>
            <span>
              <X className='text-gray-600 hover:bg-gray-500/50 hover:text-gray-400 h-8 w-8 p-1 rounded-full' />
            </span>
          </div>
          <div className='flex items-center justify-between w-full h-full aspect-square relative mt-4'>
            <Image
              alt='album'
              src='https://images.unsplash.com/photo-1526656001029-20a71b17f7ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              fill
              className='object-cover rounded-lg'
            />
          </div>
          <div className='flex items-center justify-between mt-3'>
            <div className='flex flex-col items-start'>
              <h2 className='text-xl font-semibold'>
                <Link href='/go-to-album'>Everyone I Love Is Dead</Link>
              </h2>
              <h3 className='text-sm font-semibold text-muted-foreground'>
                <Link href='/go-to-artist'>Type O Negative</Link>
              </h3>
            </div>
            <div className='flex items-center gap-2'>
              <CirclePlus className='w-5 h-5 text-gray-500 hover:text-gray-300/60' />
              <Ellipsis className='w-5 h-5 text-gray-500 hover:text-gray-300/60' />
            </div>
          </div>
          <div className='mt-6 rounded-lg bg-secondary text-secondary-foreground p-4 px-3'>
            <div className='flex flex-col w-full gap-2'>
              <p>Sanatçı hakkında</p>
              <div className='rounded-full relative w-[80px] h-[80px]'>
                <Image
                  alt='album'
                  src='https://images.unsplash.com/photo-1526656001029-20a71b17f7ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  fill
                  className='object-cover rounded-full'
                />
              </div>
              <h3 className='text-sm font-semibold'>
                <Link href='/go-to-artist'>Type O Negative</Link>
              </h3>
              <div className='flex items-center justify-between w-full'>
                <span className='text-primary-foreground text-[14px]'>
                  Aylık 130.991 dinleyici
                </span>
                <Button
                  variant='outline'
                  className='bg-transparent rounded-3xl hover:bg-inherit hover:scale-110 hover:text-inherit  font-bold'
                >
                  Takip Et
                </Button>
              </div>
              <div>
                <Dialog>
                  <DialogTrigger className='text-sm text-start w-full h-12 text-primary-foreground'>
                    Amet laborum amet magna id. Ad magna nisi ipsum anim aliqua
                    laboris dolor est amet magna id. Ad magna nisi ipsum anim
                    aliquas ...
                  </DialogTrigger>
                  <DialogContent className='max-w-[40%] bg-primary border-none h-2/3'>
                    <div className='flex items-start gap-5'>
                      <div className='w-1/4'>
                        <div className='flex flex-col px-4 font-bold'>
                          <p className='text-3xl'>113.458</p>
                          <p className='font-light'>Takipçiler</p>
                        </div>
                        <div className='flex flex-col mt-6 px-4 font-bold'>
                          <p className='text-3xl'>130.991</p>
                          <p className='font-light'>Aylık Dinleyiciler</p>
                        </div>
                        <div className='flex flex-col mt-6 px-4 font-semibold'>
                          <p className='text-sm'>Warsaw, PL</p>
                          <p className='text-sm text-muted-foreground'>
                            1.673 Dinleyici
                          </p>
                        </div>
                        <div className='flex flex-col mt-6 px-4 font-semibold'>
                          <p className='text-sm'>Istanbul, TR</p>
                          <p className='text-sm text-muted-foreground'>
                            1.673 Dinleyici
                          </p>
                        </div>
                        <div className='flex flex-col mt-5 px-4 font-semibold'>
                          <p className='text-sm'>Helsinki, FI</p>
                          <p className='text-sm text-muted-foreground'>
                            1.673 Dinleyici
                          </p>
                        </div>
                        <div className='flex flex-col mt-5 px-4 font-semibold'>
                          <p className='text-sm'>Los Angeles, US</p>
                          <p className='text-sm text-muted-foreground'>
                            1.673 Dinleyici
                          </p>
                        </div>
                        <div className='flex flex-col mt-5 px-4 font-semibold'>
                          <p className='text-sm'>Santiago, CL</p>
                          <p className='text-sm text-muted-foreground'>
                            1.673 Dinleyici
                          </p>
                        </div>
                      </div>
                      <div className='w-3/4'>
                        <p className='text-base text-muted-foreground'>
                          Eu cillum dolore eiusmod sit irure commodo labore
                          voluptate amet elit eiusmod occaecat laborum sit.
                          Deserunt laboris esse quis cupidatat quis incididunt.
                          Nostrud quis tempor <b className='text-white'>nisi</b>{' '}
                          culpa ex. Irure et sint sunt veniam consequat dolor.
                          Eu cillum dolore eiusmod sit irure commodo{' '}
                          <b className='text-white'>
                            labore voluptate amet elit
                          </b>
                          eiusmod occaecat laborum sit. Deserunt laboris esse
                          quis cupidatat quis incididunt. Nostrud quis tempor
                          nisi culpa ex. Irure et sint sunt veniam consequat
                          dolor. Nostrud quis tempor{' '}
                          <b className='text-white'>nisi</b> culpa ex. Irure et
                          sint sunt veniam consequat dolor. Eu cillum dolore
                          eiusmod sit irure commodo{' '}
                          <b className='text-white'>
                            labore voluptate amet elit
                          </b>
                          eiusmod occaecat laborum sit. Deserunt laboris esse
                          quis cupidatat quis incididunt. Nostrud quis tempor
                          nisi culpa ex. Irure et sint sunt veniam consequat
                          dolor.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
          <div className='mt-6 rounded-lg bg-secondary text-secondary-foreground p-4 px-3'>
            <p className='flex items-center justify-between text-[15px] font-semibold'>
              Katkıda bulunanlar{' '}
              <span className='hover:scale-110 hover:underline hover:text-white text-sm'>
                Tümünü göster
              </span>
            </p>

            <div className='flex flex-col gap-3'>
              <div className='flex items-center justify-between mt-2'>
                <div className='flex flex-col'>
                  <Link href='/go-to-artist' className='text-white font-medium'>
                    Lifelover
                  </Link>
                  <p className='text-xs'>Ana Sanatçı</p>
                </div>
                <Button
                  variant='outline'
                  className='bg-transparent rounded-3xl hover:bg-inherit hover:scale-110 hover:text-inherit font-bold'
                >
                  Takip Et
                </Button>
              </div>
              <div className='flex items-center justify-between mt-1'>
                <div className='flex flex-col'>
                  <Link href='/go-to-artist' className='text-white font-medium'>
                    Daniel Srebranic
                  </Link>
                  <p className='text-xs'>Lyricist</p>
                </div>
              </div>
              <div className='flex items-center justify-between mt-1'>
                <div className='flex flex-col'>
                  <Link href='/go-to-artist' className='text-white font-medium'>
                    In The Woods
                  </Link>
                  <p className='text-xs'>Composer</p>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-6 rounded-lg bg-secondary text-secondary-foreground p-4 px-3'>
            <p className='flex items-center justify-between text-sm'>
              Sıradaki
              <span className='hover:scale-110 hover:underline hover:text-white cursor-pointer'>
                Sırayı Aç
              </span>
            </p>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3 mt-3 hover:bg-gray-600/50 rounded-md w-full p-2 group/play'>
                <Music3 className='w-4 h-4 group-hover/play:hidden' />
                <Play className='w-4 h-4 hidden group-hover/play:block' />

                <div className='rounded-md relative w-[48px] h-[48px]'>
                  <Image
                    alt='album'
                    src='https://images.unsplash.com/photo-1526656001029-20a71b17f7ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    fill
                    className='object-cover rounded-md'
                  />
                </div>
                <div className='flex flex-col'>
                  <span className='text-base'>
                    <Link
                      href='/go-to-album'
                      className='hover:underline hover:scale-105'
                    >
                      My Twin
                    </Link>
                  </span>
                  <span className='text-sm'>
                    <Link
                      href='/go-to-artist'
                      className='hover:underline hover:scale-105'
                    >
                      Katatonia
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default PlayingNow;
