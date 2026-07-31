import React from 'react';
import { cn } from '../../utils/cn';

export function Container({
  children,
  className = '',
  clean = false,
  maxWidth = 'max-w-7xl', // ~1280px
  ...props
}) {
  return (
    <div
      className={cn(
        'w-full mx-auto',
        !clean && 'px-4 sm:px-6 lg:px-8',
        maxWidth,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
