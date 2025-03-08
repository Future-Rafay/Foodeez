'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import Badge from './Badge';

// RestaurantCard variants
const restaurantCardVariants = cva(
  'overflow-hidden transition-all duration-300 bg-white',
  {
    variants: {
      size: {
        sm: 'max-w-xs',
        md: 'max-w-sm',
        lg: 'max-w-md',
      },
      shadow: {
        none: '',
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
      },
      hover: {
        none: '',
        lift: 'hover:-translate-y-1 hover:shadow-lg',
        grow: 'hover:scale-[1.02] hover:shadow-lg',
      },
    },
    defaultVariants: {
      size: 'md',
      shadow: 'md',
      rounded: 'xl',
      hover: 'lift',
    },
  }
);

// RestaurantCard props interface
export interface RestaurantCardProps extends VariantProps<typeof restaurantCardVariants> {
  id: string | number;
  name: string;
  image: string;
  cuisine?: string;
  location?: string;
  rating?: number;
  reviewCount?: number;
  distance?: string;
  priceLevel?: 1 | 2 | 3 | 4;
  isOpen?: boolean;
  specialties?: string[];
  hasNfcMenu?: boolean;
  className?: string;
  href?: string;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  id,
  name,
  image,
  cuisine,
  location,
  rating,
  reviewCount,
  distance,
  priceLevel = 2,
  isOpen,
  specialties = [],
  hasNfcMenu = false,
  size,
  shadow,
  rounded,
  hover,
  className,
  href = `/restaurants/${id}`,
}) => {
  // Price level display
  const renderPriceLevel = () => {
    return Array(4)
      .fill(0)
      .map((_, index) => (
        <span
          key={index}
          className={`${
            index < priceLevel ? 'text-secondary-900' : 'text-secondary-300'
          }`}
        >
          $
        </span>
      ));
  };

  const content = (
    <div className={restaurantCardVariants({ size, shadow, rounded, hover, className })}>
      {/* Restaurant Image */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        
        {/* Status Badge */}
        {isOpen !== undefined && (
          <div className="absolute top-2 left-2">
            <Badge 
              variant={isOpen ? "success" : "error"} 
              size="sm"
            >
              {isOpen ? 'Open Now' : 'Closed'}
            </Badge>
          </div>
        )}
        
        {/* NFC Badge */}
        {hasNfcMenu && (
          <div className="absolute top-2 right-2">
            <Badge variant="primary" size="sm">
              <span className="flex items-center">
                <svg 
                  className="w-3 h-3 mr-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 10V3L4 14h7v7l9-11h-7z" 
                  />
                </svg>
                NFC Menu
              </span>
            </Badge>
          </div>
        )}
      </div>
      
      {/* Restaurant Details */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-secondary-900 truncate">{name}</h3>
            
            {/* Cuisine & Location */}
            <div className="mt-1 text-sm text-secondary-600">
              {cuisine && <span>{cuisine}</span>}
              {cuisine && location && <span className="mx-1">•</span>}
              {location && <span>{location}</span>}
            </div>
          </div>
          
          {/* Distance */}
          {distance && (
            <Badge variant="outline" size="sm">
              {distance}
            </Badge>
          )}
        </div>
        
        {/* Rating & Price Level */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center">
            {rating !== undefined && (
              <>
                <svg
                  className="w-4 h-4 text-accent-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-1 text-sm text-secondary-600">
                  {rating.toFixed(1)} {reviewCount && `(${reviewCount})`}
                </span>
              </>
            )}
          </div>
          
          <div className="text-sm font-medium">{renderPriceLevel()}</div>
        </div>
        
        {/* Specialties */}
        {specialties.length > 0 && (
          <div className="mt-3">
            <p className="text-xs text-secondary-500 mb-1">Specialties:</p>
            <div className="flex flex-wrap gap-1">
              {specialties.slice(0, 3).map((specialty) => (
                <Badge key={specialty} variant="accent" size="xs">
                  {specialty}
                </Badge>
              ))}
              {specialties.length > 3 && (
                <Badge variant="outline" size="xs">
                  +{specialties.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // If href is provided, wrap with Link
  return (
    <Link href={href} className="block">
      {content}
    </Link>
  );
};

export default RestaurantCard; 