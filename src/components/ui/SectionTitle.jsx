import React from 'react';
import { Badge } from './Badge';
import { cn } from '../../utils/cn';

export function SectionTitle({
  badge,
  badgeVariant = 'indigo',
  title,
  gradientTitle,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={cn('flex flex-col mb-12 lg:mb-16', alignClasses[align], className)}>
      {badge && (
        <Badge variant={badgeVariant} className="mb-4">
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
        {title}{' '}
        {gradientTitle && (
          <span className="text-gradient-indigo">{gradientTitle}</span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
