import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';

const variantStyles = {
  primary: 'bg-indigo-600 text-white border border-indigo-600 hover:bg-indigo-700 shadow-lg',
  secondary: 'bg-white/80 backdrop-blur-md text-slate-900 border border-slate-200/80 shadow-sm hover:bg-white hover:border-slate-300',
  outline: 'bg-white text-slate-900 border border-slate-300 hover:bg-slate-100',
  ghost: 'bg-transparent text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/50',
  gold: 'bg-gradient-to-r from-[#C8A96A] via-[#E2C889] to-[#9A7D43] text-slate-950 font-semibold shadow-lg shadow-gold/20 hover:shadow-gold/35 border border-amber-200/40',
  cta: 'bg-slate-900 text-white shadow-xl shadow-slate-900/20 hover:bg-slate-800 border border-slate-700/50',
};

const sizeStyles = {
  sm: 'px-3.5 py-1.5 text-xs font-medium rounded-xl gap-1.5',
  md: 'px-5 py-2.5 text-sm font-medium rounded-2xl gap-2',
  lg: 'px-7 py-3.5 text-base font-semibold rounded-2xl gap-2.5',
  xl: 'px-9 py-4 text-base font-bold rounded-2xl gap-3',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  loading = false,
  fullWidth = false,
  href,
  className = '',
  onClick,
  ...props
}) {
  const baseClasses = cn(
    'inline-flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2 active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none select-none tracking-wide',
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? 'w-full' : '',
    className
  );

  const content = (
    <>
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin shrink-0" />
      ) : (
        Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5" />
      )}
      <span>{children}</span>
      {!loading && Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseClasses, 'group')}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(baseClasses, 'group')}
      disabled={loading}
      {...props}
    >
      {content}
    </motion.button>
  );
}
