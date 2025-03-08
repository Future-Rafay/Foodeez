'use client';

import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Input variants using class-variance-authority
const inputVariants = cva(
  'w-full border shadow-sm focus:outline-none focus:ring-2 transition-colors',
  {
    variants: {
      variant: {
        default: 'border-secondary-300 focus:border-primary-500 focus:ring-primary-500',
        error: 'border-red-500 focus:border-red-500 focus:ring-red-500',
        success: 'border-green-500 focus:border-green-500 focus:ring-green-500',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm rounded-lg',
        md: 'px-4 py-2 text-base rounded-xl',
        lg: 'px-5 py-3 text-lg rounded-xl',
      },
      inputState: {
        disabled: 'bg-secondary-100 cursor-not-allowed opacity-75',
        enabled: 'bg-white',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      inputState: 'enabled',
    },
  }
);

// Label variants
const labelVariants = cva('block font-medium mb-1', {
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
    required: {
      true: 'after:content-["*"] after:ml-0.5 after:text-red-500',
      false: '',
    },
  },
  defaultVariants: {
    size: 'md',
    required: false,
  },
});

// Error message variants
const errorVariants = cva('mt-1 text-red-600', {
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

// Helper text variants
const helperVariants = cva('mt-1 text-secondary-600', {
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

// Input props interface
export interface InputProps 
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    Omit<VariantProps<typeof inputVariants>, 'inputState'> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isRequired?: boolean;
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  helperClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    label, 
    error, 
    helperText,
    leftIcon,
    rightIcon,
    variant,
    size,
    disabled,
    isRequired = false,
    className = '',
    containerClassName = '',
    labelClassName = '',
    errorClassName = '',
    helperClassName = '',
    ...props 
  }, ref) => {
    // Determine the variant based on error state
    const inputVariant = error ? 'error' : variant;
    const inputSize = size as 'sm' | 'md' | 'lg' | undefined;
    
    return (
      <div className={`w-full ${containerClassName}`}>
        {label && (
          <label 
            className={labelVariants({ 
              size: inputSize, 
              required: isRequired,
              className: `text-secondary-700 ${labelClassName}`
            })}
          >
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
            disabled={disabled}
            className={inputVariants({ 
              variant: inputVariant, 
              size: inputSize, 
              inputState: disabled ? 'disabled' : 'enabled',
              className: `
                ${leftIcon ? 'pl-10' : ''} 
                ${rightIcon ? 'pr-10' : ''} 
                ${className}
              `
            })}
            required={isRequired}
            aria-invalid={error ? 'true' : 'false'}
            {...props}
          />
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              {rightIcon}
            </div>
          )}
        </div>
        {error && (
          <p className={errorVariants({ size: inputSize, className: errorClassName })}>
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className={helperVariants({ size: inputSize, className: helperClassName })}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 