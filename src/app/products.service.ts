import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  private URL = "https://68206cad259dad2655ac8199.mockapi.io/products";
  products: Product[] = [];

  constructor(private http: HttpClient){}

  getProductsData(){
    return this.http.get(this.URL);
  }
}
