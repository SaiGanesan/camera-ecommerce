import { Component, OnInit } from '@angular/core';
import { NikonService } from './nikon.service';
import { Nikon } from './nikon.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cartitems } from '../../cart/cart/cartitems.model';
import { CartService } from '../../cart/cart/cart.service';

@Component({
  selector: 'app-nikon-camera',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nikon-camera.component.html',
  styleUrls: ['./nikon-camera.component.css'],
})
export class NikonCameraComponent implements OnInit {
  productCategories: { title: string; products: Nikon[] }[] = [];
  loading: boolean = true;
  errorMessage: string | null = null;

  constructor(
    private nikonService: NikonService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  // Fetch products from the Nikon service
  fetchProducts(): void {
    this.loading = true;
    this.nikonService.getProducts().subscribe({
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
  private organizeProductsByCategory(products: Nikon[]): void {
    const cameras = products.filter((p) => p.category?.toLowerCase() === 'camera');
    const lenses = products.filter((p) => p.category?.toLowerCase() === 'lens');
    const accessories = products.filter((p) => p.category?.toLowerCase() === 'accessory');

    this.productCategories = [
      { title: 'Nikon Cameras', products: cameras },
      { title: 'Nikon Lenses', products: lenses },
      { title: 'Nikon Accessories', products: accessories },
    ];
  }

  // Add a product to the cart
  addToCart(product: Nikon): void {
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
