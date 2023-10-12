"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useState } from 'react';

const Transition = ({ children }: { children: React.ReactNode }) => {
  const [variants, setVariats] = useState({});
  const pathname = usePathname();
  React.useEffect(() => {
    setVariats({
      initializing: {
        y: window.innerHeight,
      },
      animating: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      },
      exiting: {
        y: 0,
        zIndex: 0,
        transition: {
          duration: 0.4
        }
      },
    });
  }, []);

  return (
    <div className="effect">
      <AnimatePresence
        initial={false}
        mode='popLayout'
      >
        <motion.div
          key={pathname}
          variants={variants}
          initial='initializing'
          animate='animating'
          exit='exiting'
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;