export interface Business {
  businessId: string;
  customerId: string; // Reference to the owner (Customer)
  businessName: string;
  shortName: string;
  address: {
    street: string;
    state: string;
    zip: string;
    town: string;
    country: string;
  };
  webAddress?: string;
  logo?: string;
  status: 'active' | 'inactive' | 'pending';
  createdAt?: Date;
  updatedAt?: Date;
}

// Type for creating a new business
export type CreateBusinessInput = Omit<Business, 'businessId' | 'status' | 'createdAt' | 'updatedAt'>;

// Type for updating business information
export type UpdateBusinessInput = Partial<Omit<Business, 'businessId' | 'customerId' | 'createdAt' | 'updatedAt'>>;

// Type for business list item in dashboard
export interface BusinessListItem extends Business {
  owner: {
    firstName: string;
    lastName: string;
    email: string;
  };
  statistics?: {
    totalMenuItems: number;
    activeMenuItems: number;
    categories: number;
  };
} 