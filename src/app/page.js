import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className='w-screen h-screen grid content-center bg-background text-foreground'>
      <Button className='bg-primary text-primary-foreground hover:bg-secondary'>
        Merhaba
      </Button>
    </main>
  );
}
