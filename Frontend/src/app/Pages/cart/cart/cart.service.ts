import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Cart } from './cart.model';
import { Cartitems } from './cartitems.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = `${environment.backendUrl}/api/cart`; // Backend endpoint

  constructor(private http: HttpClient) {}

  // Fetch cart for a specific user
  getCart(userId: string): Observable<Cart> {
    return this.http.get<Cart>(`${this.apiUrl}/${userId}`).pipe(
      tap((cart) => console.log('Fetched cart:', cart)),
      catchError(this.handleError)
    );
  }

  // Add an item to the user's cart
  addCartItem(userId: string, item: Cartitems): Observable<Cart> {
    return this.http.post<Cart>(`${this.apiUrl}/${userId}`, item).pipe(
      tap((cart) => console.log('Item added to cart:', cart)),
      catchError(this.handleError)
    );
  }

  // Remove an item from the user's cart
  removeCartItem(userId: string, productId: number): Observable<Cart> {
    return this.http.delete<Cart>(`${this.apiUrl}/${userId}/${productId}`).pipe(
      tap((cart) => console.log(`Removed product ${productId} from cart`, cart)),
      catchError(this.handleError)
    );
  }

  // Clear the user's cart
  clearCart(userId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${userId}`).pipe(
      tap(() => console.log(`Cleared cart for user: ${userId}`)),
      catchError(this.handleError)
    );
  }

  // Increase quantity of a specific item in the cart
  increaseQuantity(userId: string, productId: number): Observable<Cart> {
    return this.http.put<Cart>(`${this.apiUrl}/${userId}/increase/${productId}`, {}).pipe(
      tap((cart) => console.log(`Increased quantity of product ${productId}`, cart)),
      catchError(this.handleError)
    );
  }

  // Decrease quantity of a specific item in the cart
  decreaseQuantity(userId: string, productId: number): Observable<Cart> {
    return this.http.put<Cart>(`${this.apiUrl}/${userId}/decrease/${productId}`, {}).pipe(
      tap((cart) => console.log(`Decreased quantity of product ${productId}`, cart)),
      catchError(this.handleError)
    );
  }

  // Update an item in the user's cart (quantity or other details)
  updateCartItem(userId: string, item: Cartitems): Observable<Cart> {
    return this.http.put<Cart>(`${this.apiUrl}/${userId}/update/${item.productId}`, item).pipe(
      tap((cart) => console.log(`Updated cart item ${item.productId}`, cart)),
      catchError(this.handleError)
    );
  }

  // Handle HTTP errors
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong with the cart service.'));
  }
}
