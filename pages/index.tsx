'use client'

import { useRouter } from 'next/navigation'
import Landing from '@/app/components/landing'

export default function Hpme() {
  const router = useRouter();

  return (
    <Landing navDownClicked={() => { router.push('/use-cases') }}></Landing>
  )
};
