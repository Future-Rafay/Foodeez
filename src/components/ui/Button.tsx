'use client';

import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Button variants using class-variance-authority for more flexibility
const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-sm hover:shadow-md',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500',
        secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500',
        accent: 'bg-accent-500 text-secondary-900 hover:bg-accent-600 focus:ring-accent-500',
        outline: 'bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-500',
        outlineSecondary: 'bg-transparent border-2 border-secondary-500 text-secondary-500 hover:bg-secondary-50 focus:ring-secondary-500',
        ghost: 'bg-transparent text-primary-500 hover:bg-primary-50 focus:ring-primary-500',
        link: 'bg-transparent text-primary-500 hover:underline focus:ring-0 shadow-none hover:shadow-none p-0',
        gradient: `bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 focus:ring-primary-500`,
      },
      size: {
        xs: 'px-2.5 py-1.5 text-xs',
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-2.5 text-base',
        lg: 'px-6 py-3 text-lg',
        xl: 'px-8 py-4 text-xl',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
      iconPosition: {
        left: 'flex-row',
        right: 'flex-row-reverse',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
      iconPosition: 'none',
    },
  }
);

// Button props interface
export interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant,
      size,
      fullWidth,
      iconPosition,
      isLoading = false,
      icon,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    // Determine spacing for icon
    const iconSpacing = iconPosition === 'left' ? 'mr-2' : iconPosition === 'right' ? 'ml-2' : '';
    
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, fullWidth, iconPosition, className })}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          <>
            {icon && iconPosition === 'left' && <span className={iconSpacing}>{icon}</span>}
            {children}
            {icon && iconPosition === 'right' && <span className={iconSpacing}>{icon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button; 