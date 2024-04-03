import Footer from '@/components/layout/Footer/Footer';
import Mixes from '@/components/layout/Mixes/Mixes';
import Suggestion from '@/components/layout/Suggestion/Suggestion';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className=''>
      <div className='flex h-full items-start justify-center flex-col'>
        <div className='bg-gradient-to-b from-slate-400 to-primary w-full p-4 px-8'>
          <div className='w-full mt-6'>
            <Mixes />
          </div>
          <div className='flex flex-col mt-10'>
            <div className='flex items-center justify-between w-full'>
              <Link href='/go-to-suggestions' className='hover:underline'>
                <span className='text-lg font-bold'>crow İçin Derlendi</span>
              </Link>
              <Link
                href='/go-to-suggestions'
                className='text-[15px] text-zinc-300 hover:underline'
              >
                Tümünü Göster
              </Link>
            </div>
            <div className='w-full'>
              <Suggestion />
            </div>
          </div>
        </div>
        <div className='w-full p-6 px-8 bg-primary'>
          <div className='flex items-center justify-between w-full'>
            <Link href='/go-to-suggestions' className='hover:underline'>
              <span className='text-lg font-bold'>Yakında Çalınanlar</span>
            </Link>
            <Link
              href='/go-to-suggestions'
              className='text-[15px] text-zinc-300 hover:underline'
            >
              Tümünü Göster
            </Link>
          </div>
          <Suggestion />
        </div>
        <div className='w-full p-6 px-8 bg-primary'>
          <div className='flex items-center justify-between w-full'>
            <Link href='/go-to-suggestions' className='hover:underline'>
              <span className='text-lg font-bold'>
                Kaldığın yerden devam et
              </span>
            </Link>
            <Link
              href='/go-to-suggestions'
              className='text-[15px] text-zinc-300 hover:underline'
            >
              Tümünü Göster
            </Link>
          </div>
          <Suggestion />
        </div>
        <div className='w-full p-6 px-8 bg-primary'>
          <div className='flex items-center justify-between w-full'>
            <Link href='/go-to-suggestions' className='hover:underline'>
              <span className='text-lg font-bold'>
                Tavsiye Edilen İstasyonlar
              </span>
            </Link>
            <Link
              href='/go-to-suggestions'
              className='text-[15px] text-zinc-300 hover:underline'
            >
              Tümünü Göster
            </Link>
          </div>
          <Suggestion />
        </div>
        <div className='w-full p-6 px-8 bg-primary'>
          <div className='flex items-center justify-between w-full'>
            <Link href='/go-to-suggestions' className='hover:underline'>
              <span className='text-lg font-bold'>Popüler radyolar</span>
            </Link>
            <Link
              href='/go-to-suggestions'
              className='text-[15px] text-zinc-300 hover:underline'
            >
              Tümünü Göster
            </Link>
          </div>
          <Suggestion />
        </div>
        <div className='w-full p-6 px-8 bg-primary'>
          <div className='flex items-center justify-between w-full'>
            <Link href='/go-to-suggestions' className='hover:underline'>
              <span className='text-lg font-bold'>Günlük müzik ihtiyacın</span>
            </Link>
            <Link
              href='/go-to-suggestions'
              className='text-[15px] text-zinc-300 hover:underline'
            >
              Tümünü Göster
            </Link>
          </div>
          <Suggestion />
        </div>
        <div className='w-full p-6 px-8 bg-primary'>
          <div className='flex items-center justify-between w-full'>
            <Link href='/go-to-suggestions' className='hover:underline'>
              <span className='text-lg font-bold'>
                Lifelover ile benzer diğer müzikler
              </span>
            </Link>
            <Link
              href='/go-to-suggestions'
              className='text-[15px] text-zinc-300 hover:underline'
            >
              Tümünü Göster
            </Link>
          </div>
          <Suggestion />
        </div>
        <Footer />
      </div>
    </main>
  );
}
