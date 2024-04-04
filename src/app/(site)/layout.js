import { Inter } from 'next/font/google';
import '../globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Player from '@/components/layout/Player/Player';
import { cn } from '@/lib/utils';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import Link from 'next/link';
import PlayingNow from '@/components/layout/PlayingNow/PlayingNow';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  ChevronLeft,
  ChevronRight,
  Download,
  BellRing,
  ExternalLink,
} from 'lucide-react';
import Image from 'next/image';
import { LeftBarNav } from '@/components/layout/LeftBarNav/LeftBarNav';
import { Library } from '@/components/layout/Library/Library';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Spotify',
  description: 'Music, podcast, events and more',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={cn(inter.className, 'relative w-full h-screen')}>
          <section className='p-3 pb-0 h-screen overflow-y-hidden'>
            <ResizablePanelGroup
              direction='horizontal'
              className='w-full h-full gap-1'
            >
              <ResizablePanel
                defaultSize={20}
                minSize={4}
                maxSize={75}
                className='rounded-xl flex flex-col gap-2'
              >
                <LeftBarNav />
                <Library />
              </ResizablePanel>
              <ResizableHandle className='bg-transparent' />
              <ResizablePanel
                defaultSize={55}
                minSize={30}
                maxSize={96}
                className='rounded-xl'
              >
                <ScrollArea className='h-[calc(100svh-60px)] w-full rounded-md pb-5'>
                  {/* MAKE BG TRANSPARENT AT TOP 0 AFTER SCROLL MAKE ITS BG PRIMARY */}
                  <nav className='flex justify-between items-center w-full p-4 sticky top-0 z-50 bg-primary'>
                    <div className='flex gap-2 items-center'>
                      <ChevronLeft className='bg-black/80 p-1 h-8 w-8 rounded-full' />
                      <ChevronRight className='bg-black/80 p-1 h-8 w-8 rounded-full' />
                    </div>
                    <div className='flex items-center gap-3'>
                      <Button className='bg-black/80 h-8 rounded-full text-white hover:bg-black/80 hover:scale-110 text-sm p-2'>
                        <Download className='h-4 w-4 text-white/90 mr-2' />
                        Uygulamayı Yükle
                      </Button>
                      <Link href='/announcement'>
                        <BellRing className='bg-black/80 p-1 h-8 w-8 rounded-full hover:scale-110' />
                      </Link>
                      <div className='mr-5'>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <div className='bg-black/80 p-1 rounded-full hover:scale-110'>
                              <div className='rounded-full relative w-7 h-7 hover:scale-110'>
                                <Image
                                  alt='album'
                                  src='https://images.unsplash.com/photo-1526656001029-20a71b17f7ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                  fill
                                  className='object-cover rounded-full'
                                />
                              </div>
                            </div>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className='bg-zinc-800 text-white border-none w-32'>
                            <DropdownMenuItem className='hover:bg-gray-700/60 text-xs font-light flex items-center justify-between'>
                              <span>Hesap</span>
                              <ExternalLink className='w-5 h-5 text-gray-500' />
                            </DropdownMenuItem>
                            <DropdownMenuItem className='hover:bg-gray-700/60  text-xs font-light'>
                              Profil
                            </DropdownMenuItem>
                            <DropdownMenuItem className='hover:bg-gray-700/60 text-xs font-light'>
                              Ayarlar
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className='hover:bg-gray-700/60 text-xs font-light'>
                              Oturumu Kapat
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </nav>
                  {children}
                </ScrollArea>
              </ResizablePanel>
              <ResizableHandle className='bg-transparent' />
              <ResizablePanel
                defaultSize={25}
                minSize={0}
                maxSize={20}
                className='rounded-xl bg-primary'
                // className='hidden' when user resize panel 1 larger than maybe 50% hide third panel
              >
                <PlayingNow />
              </ResizablePanel>
            </ResizablePanelGroup>
          </section>
          <Player />
        </body>
      </html>
    </ClerkProvider>
  );
}
