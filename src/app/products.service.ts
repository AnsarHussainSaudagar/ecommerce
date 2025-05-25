import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { HttpClient } from '@angular/common/http';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  private URL = "https://68206cad259dad2655ac8199.mockapi.io/products";
  public productSubject = new Subject();

  constructor(private http: HttpClient){}

  getProductsData(){
    return this.http.get(this.URL);
  }

  postProductData(product: Product){
    return this.http.post(this.URL, product);
  }

  deleteProductData(id : number){
    return this.http.delete(this.URL + "/" + id);
  }
}
