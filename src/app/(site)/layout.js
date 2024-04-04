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
import PlayingNow from '@/components/layout/PlayingNow/PlayingNow';
import { ScrollArea } from '@/components/ui/scroll-area';
import { LeftBarNav } from '@/components/layout/LeftBarNav/LeftBarNav';
import { Library } from '@/components/layout/Library/Library';
import { Navbar } from '@/components/layout/Navbar/Navbar';

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
                collapsedSize={4}
                collapsible={true}
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
                  <Navbar />
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
