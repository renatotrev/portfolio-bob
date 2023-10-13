"use client"

import { motion, AnimatePresence, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import usePreviousRoute from '@/app/hooks/usePreviousRoute';

const isClient = typeof window !== 'undefined';

export const variants: Variants = {
  // Slide Up Bounce Page
  initializingBouncePage: {
    y: 0,
  },
  animatingBouncePage: {
    opacity: 1,
    y: [isClient ? window.innerHeight : 1000, -100, 60, -20, 5, 0],
    transition: {
      duration: 1.7,
    },
  },
  exitingBouncePage: {
    y: 0,
    zIndex: 0,
    transition: {
      duration: 0.6
    }
  },
  // Slide Up Page
  initializingSlideUpPage: {
    y: isClient ? window.innerHeight : 1000,
  },
  animatingSlideUpPage: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
  exitingSlideUpPage: {
    y: 0,
    zIndex: 0,
    transition: {
      duration: 0.6
    }
  },
  // Slide Down Page
  initializingSlideDownPage: {
    y: isClient ? window.innerHeight * -1: 1000 * -1,
  },
  animatingSlideDownPage: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
  exitingSlideDownPage: {
    y: 0,
    zIndex: 0,
    transition: {
      duration: 0.6
    }
  },
  // Fade-in/Fade-out
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1
    }
  },

  // SlideUp
  initializingSlideUp: {
    y: -200,
  },
  animatingSlideUp: {
    y: 0,
  },
  exitingSlideUp: {
    y: -400,
    zIndex: -1
  },
  // SlideDown
  initializingSlideDown: {
    y: 200,
  },
  animatingSlideDown: {
    y: 0,
  },
  exitingSlideDown: {
    y: 400,
    zIndex: -1
  },

}

const Transition = ({ children }: { children: React.ReactNode }) => {
  const [effectClass, setEffectClass] = useState('effect');

  const pathname = usePathname();
  const previousRoute = usePreviousRoute();

  let initial = 'initializingBouncePage';
  let animate = 'animatingBouncePage';
  let exit = 'exitingBouncePage';

  if (previousRoute === '/' && pathname === '/use-cases') {
    initial = 'initializingSlideUpPage';
    animate = 'animatingSlideUpPage';
    exit = 'exitingSlideUpPage';
  }

  if (previousRoute === '/use-cases' && pathname === '/') {
    initial = 'initializingSlideDownPage';
    animate = 'animatingSlideDownPage';
    exit = 'exitingSlideDownPage';
  }


  return (
    <div className={effectClass}>
      <AnimatePresence
        initial={true}
        mode='popLayout'
      >
        <motion.div
          onAnimationStart={(definition) => {
            if (definition === 'exitingBouncePage' && pathname === '/about') {
              setEffectClass('effect');
            }
          }}
          onAnimationComplete={(definition) => {
            if (definition === 'animatingBouncePage' && pathname === '/about') {
              setEffectClass('');
            }
          }}
          key={pathname}
          variants={variants}
          initial={initial}
          animate={animate}
          exit={exit}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;