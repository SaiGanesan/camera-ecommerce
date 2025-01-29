export interface Cartitems {
    productId: number;
    productName: string;
    productImage: string;
    quantity: number;
    price: number;
    // Optional properties for updates (not mandatory for existing logic)
    maxQuantity?: number; // Optional: Maximum available stock for the item
  }
  