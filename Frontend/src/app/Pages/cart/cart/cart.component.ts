import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from './cart.service';
import { Cart } from './cart.model';
import { Cartitems } from './cartitems.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Cart | null = null; // Store the user's cart
  loading = true; // Loading state
  errorMessage: string | null = null; // Error message state

  userId = '1'; // Replace with actual user ID logic

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart(); // Fetch cart items on initialization
  }

  // Fetch the user's cart from the backend
  loadCart(): void {
    this.loading = true;
    this.cartService.getCart(this.userId).subscribe({
      next: (cart) => {
        this.cart = cart;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to load cart.';
        this.loading = false;
      },
    });
  }

  // Remove an item from the cart
  removeItem(productId: number): void {
    if (!this.cart) return;

    this.cartService.removeCartItem(this.userId, productId).subscribe({
      next: (updatedCart) => {
        this.cart = updatedCart;
      },
      error: () => {
        this.errorMessage = 'Failed to remove item.';
      },
    });
  }

  // Clear all items from the cart
  clearCart(): void {
    this.cartService.clearCart(this.userId).subscribe({
      next: () => {
        this.cart = { id: null, userId: this.userId, items: [] };
      },
      error: () => {
        this.errorMessage = 'Failed to clear cart.';
      },
    });
  }

  // Calculate total price of items in the cart
  calculateTotal(): number {
    if (!this.cart || !this.cart.items) return 0;
    return this.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Increase quantity of a product
  increaseQuantity(productId: number): void {
    if (!this.cart) return;

    const item = this.cart.items.find((item) => item.productId === productId);
    if (item) {
      item.quantity += 1;
      this.cartService.updateCartItem(this.userId, item).subscribe({
        next: () => {
          // Update successful
        },
        error: () => {
          this.errorMessage = 'Failed to update quantity.';
        },
      });
    }
  }

  // Decrease quantity of a product
  decreaseQuantity(productId: number): void {
    if (!this.cart) return;

    const item = this.cart.items.find((item) => item.productId === productId);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
      this.cartService.updateCartItem(this.userId, item).subscribe({
        next: () => {
          // Update successful
        },
        error: () => {
          this.errorMessage = 'Failed to update quantity.';
        },
      });
    }
  }
}
