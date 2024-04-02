import { Separator } from '@/components/ui/separator';
import { Instagram, Twitter, Facebook } from 'lucide-react';
const Footer = () => {
  return (
    <footer className='p-4 bg-primary w-full text-normal font-medium text-muted-foreground'>
      <div className='flex flex-col gap-6'>
        <div className='flex w-full items-start justify-between'>
          <div className='flex items-start gap-12'>
            <div className='flex flex-col items-start gap-2'>
              <p className='text-white'>Şirket</p>
              <ul className='flex flex-col gap-2 list-none'>
                <li>Hakkında</li>
                <li>Kariyer</li>
                <li>For the Record</li>
              </ul>
            </div>
            <div className='flex flex-col items-start gap-2'>
              <p className='text-white'>Topoluluklar</p>
              <ul className='flex flex-col gap-2 list-none'>
                <li>Sanatçılar İçin</li>
                <li>Geliştiriciler</li>
                <li>Reklam</li>
                <li>Yatırımcılar</li>
                <li>Satıcılar</li>
              </ul>
            </div>
            <div className='flex flex-col items-start gap-2'>
              <p className='text-white'>Yararlı Bağlantılar</p>
              <ul className='flex flex-col gap-2 list-none'>
                <li>Destek</li>
                <li>Ücretsiz Mobil Uygulama</li>
              </ul>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <Instagram className='text-white p-2 w-10 h-10 bg-gray-700/50 rounded-full' />
            <Twitter className='text-white p-2 w-10 h-10 bg-gray-700/50 rounded-full' />
            <Facebook className='text-white p-2 w-10 h-10 bg-gray-700/50 rounded-full' />
          </div>
        </div>
        <Separator />
        <div className='flex items-center justify-between gap-3 text-xs'>
          <div className='flex gap-3 items-center'>
            <span>Yasal</span>
            <span>Güvenlik ve Gizlilik Merkezi</span>
            <span>Gizlilik Politikası</span>
            <span>Reklamlar Hakkında</span>
            <span>Erişilebilirlik</span>
          </div>
          <span>© 2024 Spotify AB</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
