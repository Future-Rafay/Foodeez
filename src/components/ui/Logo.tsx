'use client';

import React from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import COLORS from '@/lib/colors';

// Logo variants using class-variance-authority
const logoVariants = cva('font-heading font-bold transition-colors duration-200', {
  variants: {
    variant: {
      default: 'text-primary-500',
      white: 'text-white',
      dark: 'text-darkGray',
    },
    size: {
      sm: 'text-xl',
      md: 'text-2xl',
      lg: 'text-3xl',
      xl: 'text-4xl',
    },
    withIcon: {
      true: 'flex items-center',
      false: '',
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    withIcon: true,
  },
});

// Logo props interface
export interface LogoProps extends VariantProps<typeof logoVariants> {
  href?: string;
  className?: string;
}

// Logo component
export const Logo: React.FC<LogoProps> = ({ 
  href = '/', 
  variant, 
  size, 
  withIcon,
  className 
}) => {
  const LogoContent = () => (
    <span className={logoVariants({ variant, size, withIcon, className })}>
      {withIcon && (
        <span className="mr-2 inline-flex items-center">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path 
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" 
              fill="currentColor"
            />
            <path 
              d="M10 8.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" 
              fill={variant === 'white' ? '#FFF' : COLORS.primary.orange}
            />
          </svg>
        </span>
      )}
      F<span className="text-accent-500">oo</span>deez
    </span>
  );

  if (href) {
    return (
      <Link href={href}>
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
};

export default Logo; 