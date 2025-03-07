'use client';

import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface FormWrapperProps<T extends z.ZodType> {
  schema: T;
  onSubmit: (data: z.infer<T>) => Promise<void>;
  children: React.ReactNode;
  className?: string;
}

export function FormWrapper<T extends z.ZodType>({
  schema,
  onSubmit,
  children,
  className = '',
}: FormWrapperProps<T>) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm({
    resolver: zodResolver(schema),
  });

  const handleSubmit = async (data: z.infer<T>) => {
    try {
      setIsSubmitting(true);
      await onSubmit(data);
      toast.success('Form submitted successfully');
      methods.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error(
        error instanceof Error ? error.message : 'An error occurred while submitting the form'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleSubmit)}
        className={`space-y-6 ${className}`}
      >
        {children}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              inline-flex items-center px-4 py-2 border border-transparent
              text-sm font-medium rounded-md shadow-sm text-white
              bg-primary-600 hover:bg-primary-700 focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-primary-500
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit'
            )}
          </button>
        </div>
      </form>
    </FormProvider>
  );
} 