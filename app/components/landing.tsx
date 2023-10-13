'use client'

import Image from 'next/image';
import Nav from '@/app/components/nav';

const Landing = ({ navDownClicked }: { navDownClicked: any }) => {
  return (
    <>
      <Nav></Nav>
      <main className="flex flex-col pt-24">
        <section className='flex justify-between'>
          <section className='w-[700px] h-[318px]'>
            <p className='text-5xl/[64px] font-bold'>
              I&apos;m Guilherme Anjos, an <span className='text-green'>UI/UX Designer</span>. I&apos;m passionate about crafting intuitive, user-centric digital solutions.
            </p>

            <section className='flex justify-between text-xl text-green pt-12'>
              <span className='flex items-center space-x-2 h-[50px]'>
                <Image src='/portfolio-bob/icons/World (Brazilian).svg' width={22} height={22} alt=''></Image>
                <p>Brazilian</p>
              </span>
              <span className='flex items-center space-x-2 h-[50px]'>
                <Image src='/portfolio-bob/icons/Location (Helsinki).svg' width={22} height={22} alt=''></Image>
                <p>Helsinki</p>
              </span>
              <span className='flex items-center space-x-2 h-[50px]'>
                <Image src='/portfolio-bob/icons/Languages.svg' width={22} height={22} alt=''></Image>
                <p>English</p>
              </span>
              <span className='flex items-center space-x-2 h-[50px]'>
                <Image src='/portfolio-bob/icons/Languages.svg' width={22} height={22} alt=''></Image>

                <p>Portuguese</p>
              </span>
            </section>
          </section>
          <section>
            <Image className='rounded-xl' src='/portfolio-bob/home/Bob.png' width={380} height={540} alt=''></Image>
          </section>
        </section>


        <section className='flex flex-col flex-wrap-reverse justify-end pt-40 space-y-6'>
          <div className='w-[48px] h-[48px]'></div>
          <button className='w-[48px] h-[48px] rounded-full bg-green flex place-content-center items-center' onClick={navDownClicked}>
            <Image src='/portfolio-bob/icons/Arrow.svg' alt='' width={20} height={12}></Image>
          </button>
        </section>
      </main>
    </>
  );
};

export default Landing;