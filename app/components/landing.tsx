'use client'

import Image from 'next/image';
import { ChevronDownIcon, GlobeEuropeAfricaIcon, MapPinIcon, LanguageIcon } from '@heroicons/react/24/solid'

import Nav from '@/app/components/nav';

const Landing = ({ navDownClicked }: { navDownClicked: any }) => {
  return (
    <section>
      <Nav></Nav>
      <main className="flex flex-col pt-24">
        <section className='flex justify-between'>
          <section className='w-[700px] h-[318px]'>
            <p className='text-5xl/[64px] font-bold'>
              I&apos;m Guilherme Anjos, an <span className='text-green'>UI/UX Designer</span>. I&apos;m passionate about crafting intuitive, user-centric digital solutions.
            </p>

            <section className='flex justify-between text-xl text-green pt-12'>
              <span className='flex items-center space-x-2 h-[50px]'>
                <GlobeEuropeAfricaIcon className='w-[22px] h-[22px]' />
                <p>Brazilian</p>
              </span>
              <span className='flex items-center space-x-2 h-[50px]'>
                <MapPinIcon className='w-[22px] h-[22px]' />
                <p>Helsinki</p>
              </span>
              <span className='flex items-center space-x-2 h-[50px]'>
                <LanguageIcon className='w-[22px] h-[22px]' />
                <p>English</p>
              </span>
              <span className='flex items-center space-x-2 h-[50px]'>
                <LanguageIcon className='w-[22px] h-[22px]' />
                <p>Portuguese</p>
              </span>
            </section>
          </section>
          <section>
            <Image className='rounded-xl' src='/Bob.png' width={380} height={540} alt=''></Image>
          </section>
        </section>


        <section className='flex flex-col flex-wrap-reverse justify-end pt-32 space-y-6'>
          <div className='w-[48px] h-[48px]'></div>
          <button className='w-[48px] h-[48px] rounded-full bg-green flex content-center' onClick={navDownClicked}>
            <ChevronDownIcon className="w-[24px] h-[48px] text-black m-auto" />
          </button>
        </section>
      </main>
    </section>
  );
};

export default Landing;