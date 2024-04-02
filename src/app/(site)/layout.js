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
import { Home, LibraryBig, Search, Plus, ArrowRight } from 'lucide-react';
import ListScroll from '@/components/layout/ListScroll/ListScroll';
import PlayingNow from '@/components/layout/PlayingNow/PlayingNow';

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
          <section className='p-2 pb-0'>
            <ResizablePanelGroup
              direction='horizontal'
              className='w-full h-full gap-1'
            >
              <ResizablePanel
                defaultSize={20}
                minSize={5}
                maxSize={75}
                className='rounded-xl flex flex-col gap-2'
              >
                <div className='flex flex-col items-start justify-center gap-6 h-[110px] p-6 bg-primary rounded-xl text-primary-foreground'>
                  <Link href='/'>
                    <span className='flex items-center gap-5 hover:text-white font-semibold text-md'>
                      <Home className='inline' /> Ana sayfa
                    </span>
                  </Link>
                  <Link href='/search'>
                    <span className='flex items-center gap-5 hover:text-white font-semibold text-md'>
                      <Search className='inline' /> Ara
                    </span>
                  </Link>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 p-3 h-[800px] bg-primary rounded-xl'>
                  <div className='flex items-center justify-between w-full p-2'>
                    <span className='flex items-center justify-between gap-2 text-primary-foreground hover:text-white font-semibold text-md cursor-pointer'>
                      <LibraryBig />
                      Kitaplığın
                    </span>
                    <span className='flex items-center gap-3 text-primary-foreground hover:text-white'>
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
              </ResizablePanel>
              <ResizableHandle className='bg-transparent' />
              <ResizablePanel
                defaultSize={55}
                minSize={20}
                maxSize={82}
                className='rounded-xl'
              >
                {children}
              </ResizablePanel>
              <ResizableHandle className='bg-transparent' />
              <ResizablePanel
                defaultSize={25}
                minSize={18}
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
