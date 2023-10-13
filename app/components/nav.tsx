'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const title = "GUILHERME ANJOS";
  const pathname = usePathname();
  const routes = [
    {
      link: '/',
      name: 'HOME'
    },
    {
      link: '/about',
      name: 'ABOUT'
    },
    {
      link: '/creativity-lab',
      name: 'CREATIVITY LAB'
    },
    {
      link: '/contact',
      name: 'CONTACT'
    }
  ].map(route => {
    return <li key={route.link} className={`link ${pathname === route.link ? 'active text-green' : ''}`}>
      <Link href={route.link}>
        {route.name}
      </Link>
    </li>
  });

  return (
    <header className='max-w-screen-xl flex items-center justify-between text-sm lg:flex pt-10 h-32'>
      <Link href='/' className='text-2xl font-bold tracking-[.08em] text-grey'>
        {title}
      </Link>
      <ul className='flex space-x-10'>
        {routes}
      </ul>
    </header>
  );
};

export default Nav;