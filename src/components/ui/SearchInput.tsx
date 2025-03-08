'use client';

import React, { useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// SearchInput variants using class-variance-authority
const searchInputVariants = cva(
  'w-full border shadow-sm focus:outline-none focus:ring-2 transition-colors pl-10 pr-4',
  {
    variants: {
      variant: {
        default: 'border-secondary-300 focus:border-primary-500 focus:ring-primary-500',
        primary: 'border-primary-300 focus:border-primary-500 focus:ring-primary-500',
        beige: 'bg-beige border-secondary-300 focus:border-primary-500 focus:ring-primary-500',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm rounded-lg',
        md: 'px-4 py-2 text-base rounded-xl',
        lg: 'px-5 py-3 text-lg rounded-xl',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      fullWidth: true,
    },
  }
);

// SearchInput props interface
export interface SearchInputProps 
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof searchInputVariants> {
  onSearch?: (value: string) => void;
  placeholder?: string;
  clearable?: boolean;
  containerClassName?: string;
  iconClassName?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  variant,
  size,
  fullWidth,
  onSearch,
  placeholder = 'Search...',
  clearable = true,
  className = '',
  containerClassName = '',
  iconClassName = '',
  onChange,
  value,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    
    if (onChange) {
      onChange(e);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(inputValue as string);
    }
  };

  const handleClear = () => {
    setInputValue('');
    
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <div className={`relative ${containerClassName}`}>
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg
          className={`h-5 w-5 text-secondary-500 ${iconClassName}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Input */}
      <input
        type="text"
        className={searchInputVariants({ variant, size, fullWidth, className })}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...props}
      />

      {/* Clear Button */}
      {clearable && inputValue && (
        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
          onClick={handleClear}
        >
          <svg
            className="h-5 w-5 text-secondary-500 hover:text-secondary-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchInput; 