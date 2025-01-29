import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminAddService } from './admin-add.service';
import { AdminAdd } from './admin-add.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-add',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {
  constructor(private adminAddService: AdminAddService) {}

  newProduct: AdminAdd = {
    productName: '',
    description: '',
    newPrice: 0,
    oldPrice: undefined,
    inStock: true,
    productTag: '',
    productImage: '',
    brand: '',        // Added brand
    category: '',     // Added category
    suitability: ''   // Added suitability
  };

  products: AdminAdd[] = [];
  editingProduct: AdminAdd | null = null;
  updatedProduct: AdminAdd = {
    productName: '',
    description: '',
    newPrice: 0,
    oldPrice: undefined,
    inStock: true,
    productTag: '',
    productImage: '',
    brand: '',        // Added brand
    category: '',     // Added category
    suitability: ''   // Added suitability
  };

  formSubmitted = false; // To handle form validation
  isLoading = false; // To manage loading state

  ngOnInit(): void {
    this.getAllProducts();
  }

  createProduct(): void {
    this.formSubmitted = true;
    if (!this.isFormValid(this.newProduct)) {
      return;
    }
    this.isLoading = true;
    this.adminAddService.createProduct(this.newProduct).subscribe(
      (createdProduct) => {
        this.newProduct = {
          productName: '',
          description: '',
          newPrice: 0,
          oldPrice: undefined,
          inStock: true,
          productTag: '',
          productImage: '',
          brand: '',
          category: '',
          suitability: ''
        };
        this.products.push(createdProduct);
        this.formSubmitted = false;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error creating product:', error);
        this.isLoading = false;
      }
    );
  }

  getAllProducts(): void {
    this.isLoading = true;
    this.adminAddService.getAllProducts().subscribe(
      (products) => {
        this.products = products;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching products:', error);
        this.isLoading = false;
      }
    );
  }

  editProduct(product: AdminAdd): void {
    this.editingProduct = product;
    this.updatedProduct = { ...product };
  }

  updateProduct(): void {
    if (this.editingProduct) {
      this.isLoading = true;
      this.adminAddService.updateProduct(this.editingProduct.id!, this.updatedProduct).subscribe(
        (updated) => {
          const index = this.products.findIndex(
            (product) => product.id === this.editingProduct!.id
          );
          if (index !== -1) {
            this.products[index] = updated;
            this.cancelEdit();
          }
          this.isLoading = false;
        },
        (error) => {
          console.error('Error updating product:', error);
          this.isLoading = false;
        }
      );
    }
  }

  cancelEdit(): void {
    this.editingProduct = null;
    this.updatedProduct = {
      productName: '',
      description: '',
      newPrice: 0,
      oldPrice: undefined,
      inStock: true,
      productTag: '',
      productImage: '',
      brand: '',
      category: '',
      suitability: ''
    };
  }

  deleteProduct(productId: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.isLoading = true;
      this.adminAddService.deleteProduct(productId).subscribe(
        () => {
          this.products = this.products.filter(
            (product) => product.id !== productId
          );
          if (this.editingProduct && this.editingProduct.id === productId) {
            this.cancelEdit();
          }
          this.isLoading = false;
        },
        (error) => {
          console.error('Error deleting product:', error);
          this.isLoading = false;
        }
      );
    }
  }

  resetForm(): void {
    this.newProduct = {
      productName: '',
      description: '',
      newPrice: 0,
      oldPrice: undefined,
      inStock: true,
      productTag: '',
      productImage: '',
      brand: '',
      category: '',
      suitability: ''
    };
    this.formSubmitted = false;
  }

  private isFormValid(product: AdminAdd): boolean {
    return (
      product.productName.trim() !== '' &&
      product.description.trim() !== '' &&
      product.newPrice > 0 &&
      product.productTag.trim() !== '' &&
      product.productImage.trim() !== '' &&
      product.brand.trim() !== '' &&
      product.category.trim() !== '' &&
      product.suitability.trim() !== ''
    );
  }
}
