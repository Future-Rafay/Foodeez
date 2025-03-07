'use client';

import { FormWrapper } from '@/components/ui/form-wrapper';
import { FormField } from '@/components/ui/form-field';
import { businessFormSchema } from '@/lib/validations/form-schemas';
import type { BusinessFormValues } from '@/lib/validations/form-schemas';
import { Toaster } from 'react-hot-toast';

export default function BusinessRegistrationPage() {
  const handleSubmit = async (data: BusinessFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Make API call to register business
    const response = await fetch('/api/business/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to register business');
    }
  };

  return (
    <div className="min-h-screen bg-secondary-50 py-12">
      <Toaster position="top-right" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-secondary-900">
              Register Your Business
            </h1>
            <p className="mt-2 text-secondary-600">
              Fill in the details below to register your business on our platform.
            </p>
          </div>

          <FormWrapper
            schema={businessFormSchema}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                label="Business Name"
                name="businessName"
                placeholder="Enter your business name"
              />
              <FormField
                label="Short Name"
                name="shortName"
                placeholder="Short business identifier"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-secondary-900">
                Business Address
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  label="Street Address"
                  name="address.street"
                  placeholder="Enter street address"
                />
                <FormField
                  label="State/Province"
                  name="address.state"
                  placeholder="Enter state or province"
                />
                <FormField
                  label="ZIP/Postal Code"
                  name="address.zip"
                  placeholder="Enter ZIP code"
                />
                <FormField
                  label="Town/City"
                  name="address.town"
                  placeholder="Enter town or city"
                />
                <FormField
                  label="Country"
                  name="address.country"
                  placeholder="Enter country"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                label="Website"
                name="webAddress"
                type="url"
                placeholder="https://example.com"
              />
              <FormField
                label="Logo URL"
                name="logo"
                type="url"
                placeholder="https://example.com/logo.png"
              />
            </div>
          </FormWrapper>
        </div>
      </div>
    </div>
  );
} 