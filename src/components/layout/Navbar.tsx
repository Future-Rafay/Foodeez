'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-heading font-bold text-primary-600">
                Foodeez
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link
              href="/discover"
              className="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Discover
            </Link>
            <Link
              href="/restaurants"
              className="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Restaurants
            </Link>
            <Link
              href="/about"
              className="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/business"
              className="text-secondary-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              For Businesses
            </Link>
            <Link
              href="/login"
              className="text-primary-600 hover:text-primary-700 px-3 py-2 text-sm font-medium transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              type="button"
              className="text-secondary-600 hover:text-primary-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white border-t border-secondary-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/discover"
              className="block px-3 py-2 text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-md"
            >
              Discover
            </Link>
            <Link
              href="/restaurants"
              className="block px-3 py-2 text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-md"
            >
              Restaurants
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-md"
            >
              About
            </Link>
            <Link
              href="/business"
              className="block px-3 py-2 text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-md"
            >
              For Businesses
            </Link>
            <Link
              href="/login"
              className="block px-3 py-2 text-base font-medium text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-md"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="block px-3 py-2 text-base font-medium bg-primary-600 text-white hover:bg-primary-700 rounded-md"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 