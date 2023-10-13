'use client'

import { useRouter } from 'next/navigation'
import Landing from '@/app/components/landing'

export default function Hpme() {
  const router = useRouter();

  return (
    <section className='bg-black h-screen'>
      <section className='max-w-[320px] xl:max-w-screen-xl m-auto'>
        <Landing navDownClicked={() => { router.push('/use-cases') }}></Landing>
      </section>
    </section>
  )
};
