export interface Sony {
    id: string; // Unique identifier for the product
    productName: string; // Name of the product
    productImage: string; // URL or path of the product image
    description: string; // Description of the product
    suitability?: string; // Optional: Best use case or suitability (e.g., Wildlife, Sports)
    category: string; // Category of the product
    oldPrice: number; // The original price of the product
    newPrice: number; // The discounted or current price of the product
    inStock: boolean; // Availability of the product
    brand: string; // The brand of the product
}
