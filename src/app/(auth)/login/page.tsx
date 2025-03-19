'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/core/Input';
import { Button } from '@/components/core/Button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // TODO: Implement email verification code sending
      // This is where you'll integrate with your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated delay
      setIsCodeSent(true);
    } catch (err) {
      setError('Failed to send verification code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // TODO: Implement verification code checking
      // This is where you'll integrate with your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated delay
      // Redirect to dashboard on success
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Invalid verification code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-sm">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-secondary-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-secondary-600">
            Or{' '}
            <Link
              href="/signup"
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              create a new account
            </Link>
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
            {error}
          </div>
        )}

        {!isCodeSent ? (
          <form className="mt-8 space-y-6" onSubmit={handleSendCode}>
            <Input
              label="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <Button
              type="submit"
              fullWidth
              isLoading={isLoading}
            >
              Send Verification Code
            </Button>
          </form>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleVerifyCode}>
            <Input
              label="Verification Code"
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="Enter verification code"
              required
            />
            <Button
              type="submit"
              fullWidth
              isLoading={isLoading}
            >
              Verify Code
            </Button>
            <Button
              type="button"
              variant="outline"
              fullWidth
              onClick={() => setIsCodeSent(false)}
            >
              Back to Email
            </Button>
          </form>
        )}
      </div>
    </div>
  );
} 