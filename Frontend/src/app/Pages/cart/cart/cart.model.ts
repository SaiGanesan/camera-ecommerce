import { Cartitems } from './cartitems.model';

export interface Cart {
  id: number | null; // Allow null for the ID when the cart is cleared
  userId: string;
  items: Cartitems[];
  // Optional properties for cart-wide details
  totalItems?: number; // Optional: Total items in the cart
  totalPrice?: number; // Optional: Pre-calculated total price
}
