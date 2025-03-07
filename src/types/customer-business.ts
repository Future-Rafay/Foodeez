export interface CustomerBusiness {
  customerId: string;
  businessId: string;
  status: 'active' | 'inactive';
  createdAt?: Date;
  updatedAt?: Date;
}

// Type for creating a new customer-business relationship
export type CreateCustomerBusinessInput = Omit<CustomerBusiness, 'createdAt' | 'updatedAt'>;

// Type for updating customer-business relationship
export type UpdateCustomerBusinessInput = Pick<CustomerBusiness, 'status'>;

// Type for customer-business relationship with additional information
export interface CustomerBusinessWithDetails extends CustomerBusiness {
  business: {
    businessName: string;
    shortName: string;
    logo?: string;
  };
  customer: {
    firstName: string;
    lastName: string;
    email: string;
  };
} 