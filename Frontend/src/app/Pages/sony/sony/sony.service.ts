
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sony } from '../sony/sony.model'; 
import { map } from 'rxjs/operators';
import { Cartitems } from '../../cart/cart/cartitems.model'; 
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SonyService {

  private apiUrl = `${environment.backendUrl}/api/products`; // Backend endpoint
  private cartUrl = `${environment.backendUrl}/api/cart`;    // Backend cart endpoint

  constructor(private http: HttpClient) {}

  // Fetch products and filter by brand "Canon"
  getProducts(): Observable<Sony[]> {
    return this.http.get<Sony[]>(this.apiUrl).pipe(
      map((products) =>
        products.filter((product) => product.brand?.toLowerCase() === 'sony')
      )
    );
  }

  // Add an item to the cart
  addCartItem(userId: string, cartItem: Cartitems): Observable<null> {
    return this.http.post<null>(`${this.cartUrl}/${userId}`, cartItem);
  }
}
