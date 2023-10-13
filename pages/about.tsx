import Image from 'next/image';
import Nav from '@/app/components/nav';
import Link from 'next/link';

export default function About() {
  return (
    <section className='bg-black'>
      <section className='max-w-[320px] xl:max-w-screen-xl m-auto'>
        <Nav></Nav>
        <main className="flex flex-col items-center pt-24">
          <p className='text-[64px]/[72px] font-bold text-green text-center'>
            About Me
          </p>
          <section className='flex justify-center pt-32'>
            <Image className='w-auto h-auto' src='/portfolio-bob/about/Bob.png' width={970} height={645} alt='' priority={true}></Image>
          </section>
          <section className='w-[870px] text-[16px]/[30px] text-green'>
            <p className='pt-16 font-bold'>
              I&apos;m Guilherme Anjos, a dedicated UX/UI designer based in Helsinki.
            </p>
            <p className='pt-7'>
              I&apos;ve spent a significant part of my career at ZOAN, diving deep into the world of design. There, I focused on crafting mobile apps and responsive websites, and I also had the unique opportunity to work closely with the Unreal Engine. This experience taught me how to blend user-friendly designs with the technical aspects of the engine, ensuring users get the best experience possible.
            </p>
            <p className='pt-7'>
              I earned my Bachelor of Digital Design degree from Centro Universitário Senac, where I learned the ins and outs of user experience design. This foundation has been crucial, especially when I work on personal projects like my text-based game powered by Generative AI. These projects let me push the limits of what design and technology can do together.
            </p>
            <p className='pt-7 pb-44'>
              Growing up in São Paulo (Brazil), I learned to adapt and embrace new experiences. This flexibility is something I carry with me, both in my work and personal life. When I&apos;m not designing, I enjoy playing the violin, creating 3D scenes on my computer, dancing, and watching food recipe videos. Each hobby adds a bit of flavor and creativity to my work.
            </p>
          </section>
        </main>
      </section>
      <main className="flex flex-col items-center pt-28 bg-white">
        <p className='text-[40px]/[26px] font-bold text-black text-center h-[80px] flex items-center'>
          Digital Art
        </p>
        <p className='text-[16px]/[26px] text-black text-center pt-4'>
          I&apos;m also passionate about 3D digital art. Here&apos;s a glimpse into my hobby artworks, where technology meets creativity.
        </p>
        <section className='flex justify-center pt-8 space-x-2'>
          <Image className='w-auto h-auto' src='/portfolio-bob/about/1.png' width={378} height={423} alt='' priority={true}></Image>
          <Image className='w-auto h-auto' src='/portfolio-bob/about/2.png' width={378} height={423} alt='' priority={true}></Image>
          <Image className='w-auto h-auto' src='/portfolio-bob/about/3.png' width={378} height={423} alt='' priority={true}></Image>
        </section>
        <section className='flex justify-center pt-2 space-x-2'>
          <Image className='w-auto h-auto' src='/portfolio-bob/about/4.png' width={378} height={423} alt='' priority={true}></Image>
          <Image className='w-auto h-auto' src='/portfolio-bob/about/5.png' width={378} height={423} alt='' priority={true}></Image>
          <Image className='w-auto h-auto' src='/portfolio-bob/about/6.png' width={378} height={423} alt='' priority={true}></Image>
        </section>
        <section className='flex justify-center pt-2 space-x-2'>
          <Image className='w-auto h-auto' src='/portfolio-bob/about/7.png' width={378} height={423} alt='' priority={true}></Image>
          <Image className='w-auto h-auto' src='/portfolio-bob/about/8.png' width={378} height={423} alt='' priority={true}></Image>
          <Image className='w-auto h-auto' src='/portfolio-bob/about/9.png' width={378} height={423} alt='' priority={true}></Image>
        </section>
        <Link className='text-[22px]/[32px] text-black text-center underline pt-8 pb-6' target='_blank' href='https://www.instagram.com/guicbanjos'>
          More on Instagram
        </Link>
      </main>
      <main className="flex flex-col items-center pt-20 bg-light-grey">
        <p className='text-[22px]/[32px] font-bold text-black text-center h-[32px] flex items-center'>
          Let&apos;s Connect
        </p>
        <p className='text-[16px]/[26px] text-black text-center pt-2'>
          Feel free to reach out for collaborations or just a friendly hello
        </p>
        <Link className='text-[16px]/[26px] text-blue text-center underline pt-2 pb-14' target='_blank' href='https://www.linkedin.com/in/guilherme-anjos-7950968b'>
          LinkedIn
        </Link>
      </main>
    </section>
  )
}
