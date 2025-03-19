'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import Badge from '../core/Badge';

// FoodCard variants
const foodCardVariants = cva(
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

// FoodCard props interface
export interface FoodCardProps extends VariantProps<typeof foodCardVariants> {
  id: string | number;
  name: string;
  image: string;
  price: number;
  currency?: string;
  rating?: number;
  reviewCount?: number;
  restaurant?: string;
  restaurantId?: string | number;
  categories?: string[];
  isSpecial?: boolean;
  isSeasonal?: boolean;
  className?: string;
  href?: string;
}

export const FoodCard: React.FC<FoodCardProps> = ({
  id,
  name,
  image,
  price,
  currency = '$',
  rating,
  reviewCount,
  restaurant,
  restaurantId,
  categories = [],
  isSpecial = false,
  isSeasonal = false,
  size,
  shadow,
  rounded,
  hover,
  className,
  href = `/foods/${id}`,
}) => {
  const content = (
    <div className={foodCardVariants({ size, shadow, rounded, hover, className })}>
      {/* Food Image */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        
        {/* Special/Seasonal Badge */}
        {(isSpecial || isSeasonal) && (
          <div className="absolute top-2 left-2">
            {isSpecial && (
              <Badge variant="primary" size="sm" className="mr-1">
                Special
              </Badge>
            )}
            {isSeasonal && (
              <Badge variant="accent" size="sm">
                Seasonal
              </Badge>
            )}
          </div>
        )}
        
        {/* Price Badge */}
        <div className="absolute top-2 right-2">
          <Badge variant="default" size="md">
            {currency}{price.toFixed(2)}
          </Badge>
        </div>
      </div>
      
      {/* Food Details */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-secondary-900 truncate">{name}</h3>
        
        {restaurant && (
          <Link 
            href={restaurantId ? `/restaurants/${restaurantId}` : '#'} 
            className="text-sm text-primary-600 hover:text-primary-700 truncate block mt-1"
          >
            {restaurant}
          </Link>
        )}
        
        {/* Categories */}
        {categories.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {categories.map((category) => (
              <Badge key={category} variant="outline" size="xs">
                {category}
              </Badge>
            ))}
          </div>
        )}
        
        {/* Rating */}
        {rating !== undefined && (
          <div className="mt-3 flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(rating) 
                      ? 'text-accent-500' 
                      : i < rating 
                        ? 'text-accent-500' 
                        : 'text-secondary-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-1 text-sm text-secondary-600">
              {rating.toFixed(1)} {reviewCount && `(${reviewCount})`}
            </span>
          </div>
        )}
      </div>
    </div>
  );

  // If href is provided, wrap with Link
  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
};

export default FoodCard; 