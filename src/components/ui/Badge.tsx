'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Badge variants using class-variance-authority
const badgeVariants = cva(
  'inline-flex items-center justify-center font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-secondary-100 text-secondary-800',
        primary: 'bg-primary-100 text-primary-800',
        secondary: 'bg-secondary-100 text-secondary-800',
        accent: 'bg-accent-100 text-accent-800',
        success: 'bg-green-100 text-green-800',
        warning: 'bg-yellow-100 text-yellow-800',
        error: 'bg-red-100 text-red-800',
        outline: 'bg-transparent border border-secondary-200 text-secondary-800',
        outlinePrimary: 'bg-transparent border border-primary-200 text-primary-800',
      },
      size: {
        xs: 'text-xs px-2 py-0.5',
        sm: 'text-xs px-2.5 py-0.5',
        md: 'text-sm px-3 py-1',
        lg: 'text-base px-4 py-1.5',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      rounded: 'full',
    },
  }
);

// Badge props interface
export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

// Badge component
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant,
  size,
  rounded,
  className,
  icon,
  ...props
}) => {
  return (
    <span
      className={badgeVariants({
        variant,
        size,
        rounded,
        className,
      })}
      {...props}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </span>
  );
};

export default Badge; 