export interface AdminAdd {
    id?: number; // Optional field for product ID
    productName: string; // Name of the product
    description: string; // Description of the product
    newPrice: number; // New price of the product
    oldPrice?: number; // Optional field for old price
    inStock: boolean; // Availability status
    productTag: string; // Tag associated with the product
    productImage: string; // Image URL or path to the product image
    brand: string; // Brand of the product
    category: string; // Category of the product (e.g., camera, lens, accessory)
    suitability: string; // Suitability description (e.g., Wildlife, Sports)
  }
  