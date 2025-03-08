'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@radix-ui/react-label';
import { toast } from 'react-hot-toast';
import { CreateCustomerInput, UpdateCustomerInput } from '@/types/customer';

// Form validation schema
const customerFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  mobilePhone: z.string().min(10, 'Invalid phone number'),
  address: z.object({
    street: z.string().min(1, 'Street is required'),
    state: z.string().min(1, 'State is required'),
    zip: z.string().min(1, 'ZIP code is required'),
    town: z.string().min(1, 'Town is required'),
    country: z.string().min(1, 'Country is required'),
  }),
  defaultLang: z.string().default('en'),
  pic: z.string().optional(),
});

interface CustomerFormProps {
  initialData?: Partial<CreateCustomerInput>;
  onSubmit: (data: CreateCustomerInput | UpdateCustomerInput) => Promise<void>;
  mode: 'create' | 'update';
}

export function CustomerForm({ initialData, onSubmit, mode }: CustomerFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<CreateCustomerInput>({
    resolver: zodResolver(customerFormSchema),
    defaultValues: {
      email: initialData?.email || '',
      firstName: initialData?.firstName || '',
      lastName: initialData?.lastName || '',
      mobilePhone: initialData?.mobilePhone || '',
      address: {
        street: initialData?.address?.street || '',
        state: initialData?.address?.state || '',
        zip: initialData?.address?.zip || '',
        town: initialData?.address?.town || '',
        country: initialData?.address?.country || '',
      },
      defaultLang: initialData?.defaultLang || 'en',
    },
  });

  const handleSubmit = async (data: CreateCustomerInput) => {
    try {
      setIsLoading(true);
      await onSubmit(data);
      toast.success(mode === 'create' ? 'Customer created successfully!' : 'Customer updated successfully!');
    } catch (error: any) {
      console.error('Form submission error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 tracking-tight">
              {mode === 'create' ? 'Create New Account' : 'Update Your Account'}
            </h2>
            <p className="mt-3 text-lg text-secondary-600">
              {mode === 'create' 
                ? 'Fill in your information to get started with BusinessHub' 
                : 'Update your account information below'}
            </p>
          </div>
          
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
            {/* Personal Information Section */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-secondary-900 mb-6">Personal Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium text-secondary-700">First Name</Label>
                  <Input
                    id="firstName"
                    {...form.register('firstName')}
                    error={form.formState.errors.firstName?.message}
                    className="w-full rounded-lg border-secondary-200 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="John"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium text-secondary-700">Last Name</Label>
                  <Input
                    id="lastName"
                    {...form.register('lastName')}
                    error={form.formState.errors.lastName?.message}
                    className="w-full rounded-lg border-secondary-200 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Doe"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-secondary-700">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    disabled={mode === 'update'}
                    {...form.register('email')}
                    error={form.formState.errors.email?.message}
                    className="w-full rounded-lg border-secondary-200 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="john.doe@example.com"
                  />
                </div>

                {mode === 'create' && (
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-secondary-700">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      {...form.register('password')}
                      error={form.formState.errors.password?.message}
                      className="w-full rounded-lg border-secondary-200 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="••••••••"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="mobilePhone" className="text-sm font-medium text-secondary-700">Mobile Phone</Label>
                  <Input
                    id="mobilePhone"
                    {...form.register('mobilePhone')}
                    error={form.formState.errors.mobilePhone?.message}
                    className="w-full rounded-lg border-secondary-200 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-secondary-900 mb-6">Address Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="street" className="text-sm font-medium text-secondary-700">Street Address</Label>
                  <Input
                    id="street"
                    {...form.register('address.street')}
                    error={form.formState.errors.address?.street?.message}
                    className="w-full rounded-lg border-secondary-200 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="123 Main St"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="town" className="text-sm font-medium text-secondary-700">City/Town</Label>
                  <Input
                    id="town"
                    {...form.register('address.town')}
                    error={form.formState.errors.address?.town?.message}
                    className="w-full rounded-lg border-secondary-200 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="San Francisco"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state" className="text-sm font-medium text-secondary-700">State/Province</Label>
                  <Input
                    id="state"
                    {...form.register('address.state')}
                    error={form.formState.errors.address?.state?.message}
                    className="w-full rounded-lg border-secondary-200 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="California"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="zip" className="text-sm font-medium text-secondary-700">ZIP/Postal Code</Label>
                  <Input
                    id="zip"
                    {...form.register('address.zip')}
                    error={form.formState.errors.address?.zip?.message}
                    className="w-full rounded-lg border-secondary-200 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="94105"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country" className="text-sm font-medium text-secondary-700">Country</Label>
                  <Input
                    id="country"
                    {...form.register('address.country')}
                    error={form.formState.errors.address?.country?.message}
                    className="w-full rounded-lg border-secondary-200 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="United States"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-700 focus:ring-4 focus:ring-primary-500/50 transition-all duration-300"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  mode === 'create' ? 'Create Account' : 'Update Account'
                )}
              </Button>
              <Button
                type="button"
                className="flex-1 bg-white text-secondary-700 border border-secondary-200 px-8 py-3 rounded-xl font-semibold hover:bg-secondary-50 focus:ring-4 focus:ring-secondary-500/50 transition-all duration-300"
                onClick={() => form.reset()}
              >
                Reset Form
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 