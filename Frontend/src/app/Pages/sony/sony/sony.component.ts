import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SonyService } from './sony.service'; // Ensure this is the correct path for your service
import { Sony } from './sony.model'; // Ensure the interface is correctly imported
import { Cartitems } from '../../cart/cart/cartitems.model';
import { CartService } from '../../cart/cart/cart.service';

@Component({
  selector: 'app-sony',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sony.component.html',
  styleUrls: ['./sony.component.css']
})
export class SonyComponent implements OnInit {
  productCategories: { title: string; products: Sony[] }[] = [];
  loading: boolean = true;
  errorMessage: string | null = null;

  constructor(
    private sonyService: SonyService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  /**
   * Fetches Sony products from the service and categorizes them.
   */
  fetchProducts(): void {
    this.loading = true;
    this.sonyService.getProducts().subscribe({
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

  /**
   * Organizes products into categories.
   * @param products List of products fetched from the service.
   */
  private organizeProductsByCategory(products: Sony[]): void {
    const cameras = products.filter((p) => p.category?.toLowerCase() === 'camera');
    const lenses = products.filter((p) => p.category?.toLowerCase() === 'lens');
    const accessories = products.filter((p) => p.category?.toLowerCase() === 'accessory');

    this.productCategories = [
      { title: 'Sony Cameras', products: cameras },
      { title: 'Sony Lenses', products: lenses },
      { title: 'Sony Accessories', products: accessories },
    ];
  }

  /**
   * Adds a product to the cart.
   * @param product The product to be added.
   */
  addToCart(product: Sony): void {
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
