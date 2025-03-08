'use client';

import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-secondary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary-600">Foodeez</h3>
            <p className="text-secondary-600 text-sm">
              A Food Discovery, Visit, Order & Review Portal empowering restaurants and food lovers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-secondary-900 mb-4">For Food Lovers</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/discover" className="text-secondary-600 hover:text-primary-600 text-sm">
                  Discover Food
                </Link>
              </li>
              <li>
                <Link href="/restaurants" className="text-secondary-600 hover:text-primary-600 text-sm">
                  Find Restaurants
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-secondary-600 hover:text-primary-600 text-sm">
                  Leave Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-secondary-900 mb-4">For Businesses</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/business/register" className="text-secondary-600 hover:text-primary-600 text-sm">
                  Register Your Business
                </Link>
              </li>
              <li>
                <Link href="/business/dashboard" className="text-secondary-600 hover:text-primary-600 text-sm">
                  Business Dashboard
                </Link>
              </li>
              <li>
                <Link href="/business/marketing" className="text-secondary-600 hover:text-primary-600 text-sm">
                  Marketing Tools
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:partners@foodeez.com"
                  className="text-secondary-600 hover:text-primary-600 text-sm"
                >
                  partners@foodeez.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-secondary-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-secondary-600 hover:text-primary-600 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-600 hover:text-primary-600 text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-secondary-600 hover:text-primary-600 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-secondary-600 hover:text-primary-600 text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-200">
          <p className="text-center text-secondary-600 text-sm">
            © {new Date().getFullYear()} Foodeez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 