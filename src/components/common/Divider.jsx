import React from 'react';
import { cn } from '../../utils/cn';

export function Divider({ className = '' }) {
  return (
    <div
      className={cn(
        'w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-8 lg:my-12',
        className
      )}
    />
  );
}
