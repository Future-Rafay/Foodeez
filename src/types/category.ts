export interface Category {
  categoryId: string;
  businessId: string; // Reference to the business
  title: string;
  displaySeq: number; // Display sequence/order
  show: boolean; // Whether to show/hide the category
  createdAt?: Date;
  updatedAt?: Date;
}

// Type for creating a new category
export type CreateCategoryInput = Omit<Category, 'categoryId' | 'createdAt' | 'updatedAt'>;

// Type for updating category information
export type UpdateCategoryInput = Partial<Omit<Category, 'categoryId' | 'businessId' | 'createdAt' | 'updatedAt'>>;

// Type for category with menu items count
export interface CategoryWithStats extends Category {
  menuItemsCount: number;
  activeMenuItemsCount: number;
} 