'use client';

import { useId } from 'react';
import { useFormContext } from 'react-hook-form';
import { Label } from '@radix-ui/react-label';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
}

export const FormField = ({
  label,
  name,
  type = 'text',
  placeholder,
  className = '',
  ...props
}: FormFieldProps) => {
  const id = useId();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="space-y-2">
      <Label
        htmlFor={id}
        className="block text-sm font-medium text-secondary-700"
      >
        {label}
      </Label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`
          w-full px-4 py-2 border rounded-md shadow-sm
          focus:ring-2 focus:ring-primary-500 focus:border-primary-500
          disabled:bg-secondary-100 disabled:cursor-not-allowed
          ${error ? 'border-red-500' : 'border-secondary-300'}
          ${className}
        `}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...register(name)}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField; 