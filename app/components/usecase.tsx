import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Image from 'next/image';


export interface UseCaseData {
  name: string;
  category: string;
  description: string;
  image: string;
}
const variants = {
  initializing: {
    opacity: 1,
  },
  animating: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exiting: {
    opacity: 0,
    transition: {
      duration: 0.4
    }
  },
};

const UseCase = ({ usaCaseData, hideNavDown, navDownClicked, navUpClicked }: { usaCaseData: UseCaseData, hideNavDown: boolean, navDownClicked: any, navUpClicked: any }) => {
  return (
    <section>
      <section className='flex justify-between'>
        <section className='w-[700px] h-[318px] pt-28'>
          <motion.div
            key={usaCaseData.name}
            variants={variants}
            initial='initializing'
            animate='animating'
            exit='exiting'
          >
            <p className='text-2xl/[30px] text-grey'>
              {usaCaseData.category}
            </p>
          </motion.div>
          <p className='text-[80px]/[96px] text-grey font-bold pt-10'>
            {usaCaseData.name}
          </p>
          <p className='text-[15px]/[28px] pt-6 uppercase'>
            {usaCaseData.description}
          </p>
        </section>
        <section>
          <Image className='w-[780px] h-[540px] rounded-xl' src={usaCaseData.image} width={780} height={540} alt=''></Image>
        </section>
      </section>
      <section className='flex flex-col flex-wrap-reverse justify-end pt-32 space-y-6'>
        <button className='w-[48px] h-[48px] rounded-full bg-green flex content-center' onClick={navUpClicked}>
          <ChevronUpIcon className="w-[24px] h-[48px] text-black m-auto" />
        </button>

        {!hideNavDown ? (
          <button className='w-[48px] h-[48px] rounded-full bg-green flex content-center' onClick={navDownClicked}>
            <ChevronDownIcon className="w-[24px] h-[48px] text-black m-auto" />
          </button>
        ) : <div className='w-[48px] h-[48px]'></div>}
      </section>
    </section>
  );
};

export default UseCase;