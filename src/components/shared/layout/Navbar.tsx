'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/core/Logo';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Logo asLink />
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
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary-600 hover:text-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
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

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="pt-2 pb-4 space-y-1">
            <Link
              href="/discover"
              className="block px-3 py-2 text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-primary-50"
            >
              Discover
            </Link>
            <Link
              href="/restaurants"
              className="block px-3 py-2 text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-primary-50"
            >
              Restaurants
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-primary-50"
            >
              About
            </Link>
            <Link
              href="/business"
              className="block px-3 py-2 text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-primary-50"
            >
              For Businesses
            </Link>
            <div className="pt-4 pb-3 border-t border-secondary-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-primary-200 flex items-center justify-center text-primary-600 font-semibold">
                    G
                  </div>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-secondary-800">Guest User</div>
                  <div className="text-sm font-medium text-secondary-500">guest@example.com</div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <Link
                  href="/login"
                  className="block px-4 py-2 text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-primary-50"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block px-4 py-2 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 mx-4 rounded-lg text-center"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 