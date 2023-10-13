"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react';
import Nav from '@/app/components/nav';
import UseCase from '@/app/components/usecase'

export enum USE_CASE {
  _1 = 'use-case-1',
  _2 = 'use-case-2'
}

export default function Page() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(USE_CASE._1);
  let currentComponent;
  const useCases = {
    [USE_CASE._1]: {
      name: 'MidJourney Redesign',
      category: 'UX UI Study Case',
      description: 'A Journey from Discord to a Unified Web Experience.',
      image: '/portfolio-bob/midjourney-use-case/thumb.png',
    },
    [USE_CASE._2]: {
      name: 'MetAmazonia UX / UI',
      category: 'Work Project',
      description: 'Blending Technology and Conservation for the Amazon Ecosystem.',
      image: '/portfolio-bob/metamazonia-use-case/thumb.png',
    }
  }
  const ellipsesComponent = Object.keys(useCases).map((index) => <i key={index} className={`ellipse ${index === currentPage ? 'active bg-green' : 'bg-grey'}`}></i>);

  switch (currentPage) {
    case USE_CASE._1:
      currentComponent = <UseCase animationDirection={'Down'} usaCaseData={useCases[USE_CASE._1]} hideNavDown={false} navDownClicked={() => setCurrentPage(USE_CASE._2)} navUpClicked={() => router.push('/')}></UseCase>;
      break;
    case USE_CASE._2:
      currentComponent = <UseCase animationDirection={'Up'} usaCaseData={useCases[USE_CASE._2]} hideNavDown={true} navDownClicked={() => { }} navUpClicked={() => setCurrentPage(USE_CASE._1)}></UseCase>;
      break;
  }

  return (
    <section>
      <Nav></Nav>
      <section className='pt-24 flex justify-end space-x-2'>
        { ellipsesComponent }
      </section>
      <main className="flex flex-col justify-between pt-6 h-[1000px]">
        {currentComponent}
      </main>
    </section>
  );
}