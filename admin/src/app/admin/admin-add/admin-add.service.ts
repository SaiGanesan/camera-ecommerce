import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminAdd } from './admin-add.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminAddService {
  private apiUrl = `${environment.backendUrl}/api/admins`; // Matches backend's @RequestMapping("/api/admins")

  constructor(private httpClient: HttpClient) {}

  /**
   * Method to create a new product
   * @param newProduct The product details to create
   * @returns Observable of the created product
   */
  createProduct(newProduct: AdminAdd): Observable<AdminAdd> {
    return this.httpClient.post<AdminAdd>(this.apiUrl, newProduct);
  }

  /**
   * Method to get all products
   * @returns Observable of an array of products
   */
  getAllProducts(): Observable<AdminAdd[]> {
    return this.httpClient.get<AdminAdd[]>(this.apiUrl);
  }

  /**
   * Method to update an existing product
   * @param productId The ID of the product to update
   * @param updatedProduct The updated product details
   * @returns Observable of the updated product
   */
  updateProduct(productId: number, updatedProduct: AdminAdd): Observable<AdminAdd> {
    return this.httpClient.put<AdminAdd>(`${this.apiUrl}/${productId}`, updatedProduct);
  }

  /**
   * Method to delete a product
   * @param productId The ID of the product to delete
   * @returns Observable of void
   */
  deleteProduct(productId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${productId}`);
  }
}
