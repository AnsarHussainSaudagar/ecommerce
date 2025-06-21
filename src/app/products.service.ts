import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { HttpClient } from '@angular/common/http';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public isLogin = true;

  private URL = 'https://68206cad259dad2655ac8199.mockapi.io/products';
  public productSubject = new Subject();

  constructor(private http: HttpClient) {}

  getProductsData() {
    return this.http.get(this.URL);
  }

  getSingleProduct(id: string) {
    return this.http.get(this.URL + '/' + id);
  }

  postProductData(product: Product) {
    return this.http.post(this.URL, {
      ...product,
      img: '../assets/images/iphone.webp',
    });
  }

  deleteProductData(id: number) {
    return this.http.delete(this.URL + '/' + id);
  }
}
