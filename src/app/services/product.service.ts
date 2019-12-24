import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient ) { }

getProducts(): Observable<Product[]> {
return this.http.get('http://localhost:3000/products').pipe(
  map((productArray: any[]) => productArray.map(productData => new Product(productData)))
);

}

getProduct(productId: number): Observable<Product> {
 return this.http.get('http://localhost:3000/products/' + productId).pipe(
  map((productData: any) => new Product(productData)),

);
}
decrementStock(productId: number, numUnits: number) {
}
getProductBySlug(slug: string): Observable<Product> {
  return this.http.get('http://localhost:3000/products/?slug=' + slug).pipe(
  map((productData: any) => new Product(productData[0])),
);
};

}

