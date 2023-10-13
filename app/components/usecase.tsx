import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { variants } from './transitions';
import { useState } from 'react';

export interface UseCaseData {
  name: string;
  category: string;
  description: string;
  image: string;
}

const UseCase = ({ animationDirection, usaCaseData, hideNavDown, navDownClicked, navUpClicked }: { animationDirection: string, usaCaseData: UseCaseData, hideNavDown: boolean, navDownClicked: any, navUpClicked: any }) => {
  const [navBlocked, setNavBlocked] = useState(false);

  return (
    <section>
      <section className='flex justify-between'>
        <section className='w-[700px] pt-28'>
          <AnimatePresence
            initial={false}
            mode='popLayout'
          >
            <motion.div
              onAnimationComplete={() => setTimeout(() => setNavBlocked(false), 10)}
              onAnimationStart={() => setNavBlocked(true)}
              key={usaCaseData.category}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}>
              <p className='text-2xl/[30px] text-grey z-10'>
                {usaCaseData.category}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className='w-full overflow-hidden relative'>
            <AnimatePresence
              initial={false}
              mode='popLayout'
            >
              <motion.div
                key={usaCaseData.name}
                initial={`initializingSlide${animationDirection}`}
                animate={`animatingSlide${animationDirection}`}
                exit={`exitingSlide${animationDirection}`}
                variants={variants}>
                <p className='text-[80px]/[96px] h-full text-grey font-bold pt-10'>
                  {usaCaseData.name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence
            initial={false}
            mode='popLayout'
          >
            <motion.div
              key={usaCaseData.description}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}>
              <p className='text-[15px]/[28px] pt-6 uppercase'>
                {usaCaseData.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <button className='text-[20px]/[26px] w-[132px] h-[50px] mt-10 bg-green text-black rounded-md'>Discover</button>
        </section>

        <section className='overflow-hidden relative'>
          <AnimatePresence
            initial={false}
            mode='popLayout'
          >
            <motion.div
              key={usaCaseData.name}
              initial={`initializingSlide${animationDirection}`}
              animate={`animatingSlide${animationDirection}`}
              exit={`exitingSlide${animationDirection}`}
              variants={variants}>
              <Image className='w-[780px] h-[540px] rounded-xl' src={usaCaseData.image} width={780} height={540} alt=''></Image>
            </motion.div>
          </AnimatePresence>
        </section>

      </section>
      <section className='flex flex-col flex-wrap-reverse justify-end pt-32 space-y-6'>
        <button className='w-[48px] h-[48px] rounded-full bg-green flex place-content-center items-center rotate-180' onClick={() => !navBlocked && navUpClicked()}>
          <Image src='/portfolio-bob/icons/Arrow.svg' alt='' width={20} height={12}></Image>
        </button>
        {!hideNavDown ? (
          <button className='w-[48px] h-[48px] rounded-full bg-green flex place-content-center items-center' onClick={() => !navBlocked && navDownClicked()}>
            <Image src='/portfolio-bob/icons/Arrow.svg' alt='' width={20} height={12}></Image>
          </button>
        ) : <div className='w-[48px] h-[48px]'></div>}
      </section>
    </section>
  );
};

export default UseCase;