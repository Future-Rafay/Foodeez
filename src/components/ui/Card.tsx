'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Card variants using class-variance-authority
const cardVariants = cva(
  'overflow-hidden transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'bg-white',
        primary: 'bg-primary-50',
        secondary: 'bg-secondary-50',
        accent: 'bg-accent-50',
        beige: 'bg-beige',
      },
      shadow: {
        none: '',
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
        xl: 'shadow-xl',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-2xl',
      },
      border: {
        none: 'border-0',
        default: 'border border-gray-200',
        primary: 'border border-primary-200',
        secondary: 'border border-secondary-200',
        accent: 'border border-accent-200',
      },
      hover: {
        none: '',
        lift: 'hover:-translate-y-1 hover:shadow-lg',
        grow: 'hover:scale-[1.02] hover:shadow-lg',
        highlight: 'hover:border-primary-500',
      },
      padding: {
        none: 'p-0',
        sm: 'p-3',
        md: 'p-5',
        lg: 'p-7',
        xl: 'p-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      shadow: 'md',
      rounded: 'xl',
      border: 'none',
      hover: 'lift',
      padding: 'md',
    },
  }
);

// Card props interface
export interface CardProps extends VariantProps<typeof cardVariants> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

// Card component
export const Card: React.FC<CardProps> = ({
  children,
  variant,
  shadow,
  rounded,
  border,
  hover,
  padding,
  className,
  onClick,
  ...props
}) => {
  return (
    <div
      className={cardVariants({
        variant,
        shadow,
        rounded,
        border,
        hover,
        padding,
        className,
      })}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

// Card Header component
export const CardHeader: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  return <div className={`mb-4 ${className}`}>{children}</div>;
};

// Card Title component
export const CardTitle: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  return <h3 className={`text-xl font-bold text-secondary-900 ${className}`}>{children}</h3>;
};

// Card Description component
export const CardDescription: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  return <p className={`text-secondary-600 mt-1 ${className}`}>{children}</p>;
};

// Card Content component
export const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  return <div className={className}>{children}</div>;
};

// Card Footer component
export const CardFooter: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => {
  return <div className={`mt-4 pt-4 border-t border-gray-200 ${className}`}>{children}</div>;
};

export default Object.assign(Card, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
}); 