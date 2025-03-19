'use client';

import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Input variants using class-variance-authority
const inputVariants = cva(
  'w-full transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none',
  {
    variants: {
      variant: {
        default: 'bg-white border-secondary-300 focus:border-primary-500 focus:ring-primary-500',
        primary: 'bg-white border-primary-300 focus:border-primary-500 focus:ring-primary-500',
        beige: 'bg-beige-100 border-secondary-300 focus:border-primary-500 focus:ring-primary-500',
        error: 'bg-white border-red-300 focus:border-red-500 focus:ring-red-500 text-red-900',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm rounded-lg',
        md: 'px-4 py-2 text-base rounded-xl',
        lg: 'px-5 py-3 text-lg rounded-xl',
      },
      withIcon: {
        left: 'pl-10',
        right: 'pr-10',
        both: 'pl-10 pr-10',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      withIcon: 'none',
    },
  }
);

// Input props interface
export interface InputProps 
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string;
  helperText?: string;
  error?: string;
  withRing?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant,
      size,
      withIcon,
      label,
      helperText,
      error,
      withRing = true,
      leftIcon,
      rightIcon,
      containerClassName = '',
      className = '',
      ...props
    },
    ref
  ) => {
    // Determine if we need left or right icon or both
    let iconPlacement: 'left' | 'right' | 'both' | 'none' = 'none';
    if (leftIcon && rightIcon) iconPlacement = 'both';
    else if (leftIcon) iconPlacement = 'left';
    else if (rightIcon) iconPlacement = 'right';

    // Adjust variant if there's an error
    const inputVariant = error ? 'error' : variant;
    
    // Determine the ring class based on the withRing prop
    const ringClass = withRing ? 'focus:ring-2' : 'focus:ring-0';
    
    return (
      <div className={`space-y-1 ${containerClassName}`}>
        {label && (
          <label className="block text-sm font-medium text-secondary-700 mb-1">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            className={`${inputVariants({
              variant: inputVariant,
              size,
              withIcon: iconPlacement,
            })} ${ringClass} border ${className}`}
            {...props}
          />

          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              {rightIcon}
            </div>
          )}
        </div>

        {/* Error or Helper Text */}
        {error ? (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        ) : helperText ? (
          <p className="mt-1 text-sm text-secondary-500">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 