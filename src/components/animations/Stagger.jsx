import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from './variants';

export function Stagger({
  children,
  staggerChildren = 0.1,
  delayChildren = 0.1,
  className = '',
  once = true,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={staggerContainer(staggerChildren, delayChildren)}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}
