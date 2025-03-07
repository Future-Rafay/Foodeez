'use client';

import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-secondary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary-600">BusinessHub</h3>
            <p className="text-secondary-600 text-sm">
              Empowering businesses to manage and grow their online presence effectively.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-secondary-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-secondary-600 hover:text-primary-600 text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-secondary-600 hover:text-primary-600 text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-600 hover:text-primary-600 text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-secondary-900 mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-secondary-600 hover:text-primary-600 text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-600 hover:text-primary-600 text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-secondary-600 hover:text-primary-600 text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:support@businesshub.com"
                  className="text-secondary-600 hover:text-primary-600 text-sm"
                >
                  support@businesshub.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-secondary-900 mb-4">Legal</h4>
            <ul className="space-y-2">
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
            © {new Date().getFullYear()} BusinessHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 