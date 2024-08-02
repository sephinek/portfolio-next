import HeaderNav from '@/app/_ui/HeaderNav';
import Logo from '@/app/_ui/Logo';

export default function Header() {
  return (
    <header className='flex items-center justify-between max-w-7xl mx-auto px-4 py-2'>
      <Logo />
      <HeaderNav />
    </header>
  );
}
