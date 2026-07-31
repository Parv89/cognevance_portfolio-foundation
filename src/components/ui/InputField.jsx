import React from 'react';
import { cn } from '../../utils/cn';

export function InputField({
  label,
  error,
  helperText,
  icon: Icon,
  type = 'text',
  className = '',
  rows,
  ...props
}) {
  const isTextArea = type === 'textarea';
  const InputComponent = isTextArea ? 'textarea' : 'input';

  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label className="text-xs font-semibold text-slate-700 tracking-wide uppercase">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {Icon && (
          <div className="absolute left-3.5 text-slate-400 pointer-events-none">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <InputComponent
          type={!isTextArea ? type : undefined}
          rows={isTextArea ? rows || 4 : undefined}
          className={cn(
            'w-full bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-2xs transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/80 hover:border-slate-300',
            Icon && 'pl-10',
            error && 'border-red-500 focus:ring-red-500/20 focus:border-red-500',
            className
          )}
          {...props}
        />
      </div>
      {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
      {helperText && !error && (
        <span className="text-xs text-slate-500">{helperText}</span>
      )}
    </div>
  );
}
