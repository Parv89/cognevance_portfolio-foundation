import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export function Card({
  children,
  variant = 'glass',
  hover = true,
  className = '',
  onClick,
  ...props
}) {
  const variantClasses = {
    glass: 'glass-card border-slate-200/80',
    solid: 'bg-white border border-slate-200/90 shadow-luxury',
    dark: 'glass-card-dark text-white border-slate-800',
    gradient: 'bg-gradient-to-br from-white via-slate-50 to-indigo-50/30 border border-slate-200/80 shadow-luxury',
  };

  const Component = hover ? motion.div : 'div';
  const hoverProps = hover
    ? {
        whileHover: { y: -6, transition: { duration: 0.3, ease: 'easeOut' } },
      }
    : {};

  return (
    <Component
      onClick={onClick}
      className={cn(
        'rounded-3xl p-6 relative overflow-hidden transition-all duration-300',
        variantClasses[variant],
        hover && 'hover:shadow-card-lift hover:border-slate-300',
        className
      )}
      {...hoverProps}
      {...props}
    >
      {children}
    </Component>
  );
}
