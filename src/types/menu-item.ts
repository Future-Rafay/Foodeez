export interface MenuItem {
  menuId: string;
  businessId: string; // Reference to the business
  categoryId: string; // Reference to the category
  displaySeq: number;
  title: string;
  description: string;
  pictures: {
    pic1?: string;
    pic2?: string;
    pic3?: string;
  };
  approved: boolean;
  publish: boolean;
  price: number;
  currency: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Type for creating a new menu item
export type CreateMenuItemInput = Omit<MenuItem, 'menuId' | 'approved' | 'publish' | 'createdAt' | 'updatedAt'>;

// Type for updating menu item information
export type UpdateMenuItemInput = Partial<Omit<MenuItem, 'menuId' | 'businessId' | 'createdAt' | 'updatedAt'>>;

// Type for menu item with category information
export interface MenuItemWithCategory extends MenuItem {
  category: {
    categoryId: string;
    title: string;
  };
}

// Type for menu item list view
export interface MenuItemListView {
  menuId: string;
  title: string;
  categoryTitle: string;
  price: number;
  currency: string;
  status: {
    approved: boolean;
    published: boolean;
  };
  thumbnail?: string;
} 