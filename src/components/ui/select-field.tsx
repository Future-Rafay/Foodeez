'use client';

import { useId } from 'react';
import { useFormContext } from 'react-hook-form';
import { Label } from '@radix-ui/react-label';
import * as Select from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';

interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  name: string;
  options: Option[];
  placeholder?: string;
  className?: string;
}

export const SelectField = ({
  label,
  name,
  options,
  placeholder = 'Select an option',
  className = '',
}: SelectFieldProps) => {
  const id = useId();
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  // Register the field with react-hook-form
  register(name);

  return (
    <div className="space-y-2">
      <Label
        htmlFor={id}
        className="block text-sm font-medium text-secondary-700"
      >
        {label}
      </Label>
      <Select.Root onValueChange={(value) => setValue(name, value)}>
        <Select.Trigger
          id={id}
          className={`
            w-full px-4 py-2 border rounded-md shadow-sm bg-white
            flex items-center justify-between
            focus:ring-2 focus:ring-primary-500 focus:border-primary-500
            disabled:bg-secondary-100 disabled:cursor-not-allowed
            ${error ? 'border-red-500' : 'border-secondary-300'}
            ${className}
          `}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        >
          <Select.Value placeholder={placeholder} />
          <Select.Icon>
            <ChevronDown className="h-4 w-4 text-secondary-500" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className="bg-white rounded-md shadow-lg border border-secondary-200">
            <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-white text-secondary-700">
              <ChevronDown className="h-4 w-4 rotate-180" />
            </Select.ScrollUpButton>
            <Select.Viewport className="p-1">
              {options.map((option) => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  className="relative flex items-center px-8 py-2 text-sm text-secondary-700 rounded-sm hover:bg-primary-50 hover:text-primary-900 focus:bg-primary-100 focus:text-primary-900 outline-none cursor-pointer"
                >
                  <Select.ItemText>{option.label}</Select.ItemText>
                  <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Viewport>
            <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-white text-secondary-700">
              <ChevronDown className="h-4 w-4" />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default SelectField; 