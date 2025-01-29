import { Component, OnInit } from '@angular/core';
import { AdminAddService } from '../admin-add/admin-add.service'; // Service to interact with the backend
import { AdminAdd } from '../admin-add/admin-add.model'; // Model for product data
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-view',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css'],
})
export class AdminViewComponent implements OnInit {
  products: AdminAdd[] = []; // Array to hold products
  loading: boolean = true; // To track loading state
  error: string | null = null; // To store error messages

  constructor(private adminAddService: AdminAddService) {}

  ngOnInit(): void {
    this.getAllProducts(); // Fetch products when the component is initialized
  }

  // Fetch all products from the backend
  getAllProducts(): void {
    this.loading = true;
    this.error = null;

    this.adminAddService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load products. Please try again later.';
        this.loading = false;
        console.error(err);
      },
    });
  }

  // Delete a product by ID
  deleteProduct(productId: number | undefined): void {
    if (productId && confirm('Are you sure you want to delete this product?')) {
      this.adminAddService.deleteProduct(productId).subscribe({
        next: () => {
          // Remove the deleted product from the list
          this.products = this.products.filter((product) => product.id !== productId);
        },
        error: (err) => {
          this.error = 'Failed to delete the product. Please try again later.';
          console.error(err);
        },
      });
    }
  }
}
