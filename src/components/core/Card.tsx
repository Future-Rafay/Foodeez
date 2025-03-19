'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Card variants using class-variance-authority
const cardVariants = cva('overflow-hidden transition-all duration-300', {
  variants: {
    variant: {
      default: 'bg-white',
      primary: 'bg-primary-50',
      secondary: 'bg-secondary-50',
      beige: 'bg-beige-100',
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
      '2xl': 'rounded-2xl',
    },
    border: {
      none: 'border-0',
      default: 'border border-secondary-200',
      primary: 'border border-primary-200',
      secondary: 'border border-secondary-300',
    },
    hover: {
      none: '',
      lift: 'hover:-translate-y-1 hover:shadow-lg',
      grow: 'hover:scale-[1.02] hover:shadow-lg',
      highlight: 'hover:border-primary-300',
    },
    padding: {
      none: 'p-0',
      sm: 'p-3',
      md: 'p-6',
      lg: 'p-8',
    },
  },
  defaultVariants: {
    variant: 'default',
    shadow: 'md',
    rounded: 'md',
    border: 'none',
    hover: 'none',
    padding: 'none',
  },
});

// Card props interface
export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

// Header, Content, Footer and Title component types
type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;
type CardContentProps = React.HTMLAttributes<HTMLDivElement>;
type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;
type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;
type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

// Card component
interface CardComponent
  extends React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>> {
  Header: React.ForwardRefExoticComponent<CardHeaderProps & React.RefAttributes<HTMLDivElement>>;
  Content: React.ForwardRefExoticComponent<CardContentProps & React.RefAttributes<HTMLDivElement>>;
  Footer: React.ForwardRefExoticComponent<CardFooterProps & React.RefAttributes<HTMLDivElement>>;
  Title: React.ForwardRefExoticComponent<CardTitleProps & React.RefAttributes<HTMLHeadingElement>>;
  Description: React.ForwardRefExoticComponent<CardDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
}

// Card component
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant, shadow, rounded, border, hover, padding, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cardVariants({ variant, shadow, rounded, border, hover, padding, className })}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';

// Card Header component
const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`p-6 pb-3 ${className}`} {...props}>
        {children}
      </div>
    );
  }
);
CardHeader.displayName = 'CardHeader';

// Card Content component
const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`p-6 pt-0 pb-2 ${className}`} {...props}>
        {children}
      </div>
    );
  }
);
CardContent.displayName = 'CardContent';

// Card Footer component
const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`p-6 pt-4 flex justify-end items-center gap-4 ${className}`} {...props}>
        {children}
      </div>
    );
  }
);
CardFooter.displayName = 'CardFooter';

// Card Title component
const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <h3 ref={ref} className={`text-lg font-semibold text-secondary-900 ${className}`} {...props}>
        {children}
      </h3>
    );
  }
);
CardTitle.displayName = 'CardTitle';

// Card Description component
const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <p ref={ref} className={`text-sm text-secondary-600 mt-2 ${className}`} {...props}>
        {children}
      </p>
    );
  }
);
CardDescription.displayName = 'CardDescription';

// Add sub-components to Card
(Card as CardComponent).Header = CardHeader;
(Card as CardComponent).Content = CardContent;
(Card as CardComponent).Footer = CardFooter;
(Card as CardComponent).Title = CardTitle;
(Card as CardComponent).Description = CardDescription;

export {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription
};

export default Card as CardComponent; 