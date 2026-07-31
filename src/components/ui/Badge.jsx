import React from 'react';
import { cn } from '../../utils/cn';

const badgeVariants = {
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
  gold: 'bg-amber-50 text-amber-800 border-amber-200/80 font-medium',
  slate: 'bg-slate-100 text-slate-700 border-slate-200',
  success: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
  glass: 'bg-white/80 backdrop-blur-md text-slate-900 border-slate-200/80 shadow-xs',
};

export function Badge({
  children,
  variant = 'indigo',
  icon: Icon,
  pulse = false,
  className = '',
}) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider rounded-full border shadow-2xs uppercase select-none',
        badgeVariants[variant],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </div>
  );
}
