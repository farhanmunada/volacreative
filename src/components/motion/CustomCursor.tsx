'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'hidden'>('default');

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setCursorVariant('hidden');
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('[data-cursor]');
      if (target) {
        const text = target.getAttribute('data-cursor') || 'VIEW';
        setCursorText(text);
        setCursorVariant('hover');
      } else {
        setCursorText('');
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (cursorVariant === 'hidden') return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full font-mono text-[10px] font-black tracking-widest text-black border-2 border-black"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: cursorVariant === 'hover' ? 88 : 14,
        height: cursorVariant === 'hover' ? 88 : 14,
        backgroundColor: cursorVariant === 'hover' ? '#a3e635' : '#000000',
        boxShadow: cursorVariant === 'hover' ? '4px 4px 0px 0px #000' : 'none',
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
    >
      {cursorVariant === 'hover' && (
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="uppercase select-none text-center font-bold px-1"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
};
