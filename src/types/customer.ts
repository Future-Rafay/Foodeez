export interface Customer {
  customerId: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  mobilePhone: string;
  address: {
    street: string;
    state: string;
    zip: string;
    town: string;
    country: string;
  };
  defaultLang: string;
  pic?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Response type for customer data without sensitive information
export type CustomerResponse = Omit<Customer, 'password'>;

// Type for creating a new customer
export type CreateCustomerInput = Omit<Customer, 'customerId' | 'createdAt' | 'updatedAt'>;

// Type for updating customer information
export type UpdateCustomerInput = Partial<Omit<Customer, 'customerId' | 'email' | 'createdAt' | 'updatedAt'>>; 