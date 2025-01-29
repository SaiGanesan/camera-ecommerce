import { Component, OnInit } from '@angular/core';
import { CanonService } from './canon.service';
import { Canon } from './canon.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cartitems } from '../../cart/cart/cartitems.model';
import { CartService } from '../../cart/cart/cart.service';

@Component({
  selector: 'app-canon',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './canon.component.html',
  styleUrls: ['./canon.component.css'],
})
export class CanonComponent implements OnInit {
  productCategories: { title: string; products: Canon[] }[] = [];
  loading: boolean = true;
  errorMessage: string | null = null;

  constructor(
    private canonService: CanonService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  // Fetch products from the Canon service
  fetchProducts(): void {
    this.loading = true;
    this.canonService.getProducts().subscribe({
      next: (products) => {
        this.organizeProductsByCategory(products);
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to load products. Please try again later.';
        this.loading = false;
      },
    });
  }

  // Organize products by category
  private organizeProductsByCategory(products: Canon[]): void {
    const cameras = products.filter((p) => p.category?.toLowerCase() === 'camera');
    const lenses = products.filter((p) => p.category?.toLowerCase() === 'lens');
    const accessories = products.filter((p) => p.category?.toLowerCase() === 'accessory');

    this.productCategories = [
      { title: 'Canon Cameras', products: cameras },
      { title: 'Canon Lenses', products: lenses },
      { title: 'Canon Accessories', products: accessories },
    ];
  }

  // Add a product to the cart
  addToCart(product: Canon): void {
    const userId = '1'; // Replace this with actual user ID logic
    const cartItem: Cartitems = {
      productId: Number(product.id), // Convert id to number
      productName: product.productName,
      productImage: product.productImage,
      price: product.newPrice,
      quantity: 1,
    };

    this.cartService.addCartItem(userId, cartItem).subscribe({
      next: () => {
        alert(`${product.productName} has been added to the cart.`);
      },
      error: () => {
        alert(`Failed to add ${product.productName} to the cart. Please try again.`);
      },
    });
  }
}
