'use client';

import React from 'react';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import Link from 'next/link';

// Logo variants using class-variance-authority
const logoVariants = cva('inline-flex items-center font-bold', {
  variants: {
    variant: {
      dark: 'text-secondary-900',
      primary: 'text-primary-600',
      white: 'text-white',
    },
    size: {
      xs: 'text-lg',
      sm: 'text-xl',
      md: 'text-2xl',
      lg: 'text-3xl',
      xl: 'text-4xl',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

// Icon variants
const iconVariants = cva('mr-2', {
  variants: {
    size: {
      xs: 'w-5 h-5',
      sm: 'w-6 h-6',
      md: 'w-7 h-7',
      lg: 'w-8 h-8',
      xl: 'w-9 h-9',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

// Logo props interface
export interface LogoProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof logoVariants> {
  withIcon?: boolean;
  asLink?: boolean;
  href?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant,
  size,
  withIcon = true,
  asLink = false,
  href = '/',
  className = '',
  ...props
}) => {
  const content = (
    <div className={logoVariants({ variant, size, className })} {...props}>
      {withIcon && (
        <svg 
          className={iconVariants({ size })} 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M4 18H20M4 6H20H4ZM4 12H20H4Z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      )}
      <span className="font-heading">Foodeez</span>
    </div>
  );

  if (asLink) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
};

export default Logo; 