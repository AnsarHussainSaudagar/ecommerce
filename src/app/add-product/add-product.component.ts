import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  newProduct: Product = {
    name: '',
    decription: '',
    price: 0,
    img: '../assets/images/iphone.webp',
  };

  // productsService = new ProductsService();
  constructor(private productsService: ProductsService){

  }

  onSubmit(){
    
    this.productsService.products.push(this.newProduct);
    
  }
  
} 
