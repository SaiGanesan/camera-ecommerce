
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nikon } from '../nikon-camera/nikon.model'; 
import { map } from 'rxjs/operators';
import { Cartitems } from '../../cart/cart/cartitems.model'; 
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NikonService {

  private apiUrl = `${environment.backendUrl}/api/products`; // Backend endpoint
  private cartUrl = `${environment.backendUrl}/api/cart`;    // Backend cart endpoint

  constructor(private http: HttpClient) {}

  // Fetch products and filter by brand "Canon"
  getProducts(): Observable<Nikon[]> {
    return this.http.get<Nikon[]>(this.apiUrl).pipe(
      map((products) =>
        products.filter((product) => product.brand?.toLowerCase() === 'nikon')
      )
    );
  }

  // Add an item to the cart
  addCartItem(userId: string, cartItem: Cartitems): Observable<null> {
    return this.http.post<null>(`${this.cartUrl}/${userId}`, cartItem);
  }
}
