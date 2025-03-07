import * as z from 'zod';

// Common schemas
const addressSchema = z.object({
  street: z.string().min(1, 'Street address is required'),
  state: z.string().min(1, 'State is required'),
  zip: z.string().min(1, 'ZIP code is required'),
  town: z.string().min(1, 'Town is required'),
  country: z.string().min(1, 'Country is required'),
});

// Customer form schema
export const customerFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  mobilePhone: z.string().min(1, 'Phone number is required'),
  address: addressSchema,
  defaultLang: z.string().min(1, 'Language preference is required'),
  pic: z.string().optional(),
});

// Business form schema
export const businessFormSchema = z.object({
  businessName: z.string().min(1, 'Business name is required'),
  shortName: z.string().min(1, 'Short name is required'),
  address: addressSchema,
  webAddress: z.string().url('Invalid website URL').optional(),
  logo: z.string().optional(),
});

// Category form schema
export const categoryFormSchema = z.object({
  title: z.string().min(1, 'Category title is required'),
  displaySeq: z.number().min(0, 'Display sequence must be a positive number'),
  show: z.boolean(),
});

// Menu item form schema
export const menuItemFormSchema = z.object({
  categoryId: z.string().min(1, 'Category is required'),
  displaySeq: z.number().min(0, 'Display sequence must be a positive number'),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  pictures: z.object({
    pic1: z.string().optional(),
    pic2: z.string().optional(),
    pic3: z.string().optional(),
  }),
  price: z.number().min(0, 'Price must be a positive number'),
  currency: z.string().min(1, 'Currency is required'),
});

// Form types
export type CustomerFormValues = z.infer<typeof customerFormSchema>;
export type BusinessFormValues = z.infer<typeof businessFormSchema>;
export type CategoryFormValues = z.infer<typeof categoryFormSchema>;
export type MenuItemFormValues = z.infer<typeof menuItemFormSchema>; 