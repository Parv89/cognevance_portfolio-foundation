import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, fadeRight, scaleIn } from './variants';

export function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
}) {
  const getVariant = () => {
    switch (direction) {
      case 'left':
        return fadeLeft(delay, duration);
      case 'right':
        return fadeRight(delay, duration);
      case 'scale':
        return scaleIn(delay, duration);
      case 'up':
      default:
        return fadeUp(delay, duration);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={getVariant()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
