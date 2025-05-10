import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/product.model';

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

  @Output() productEmitter = new EventEmitter();

  onSubmit() {
    // console.log(this.newProduct);
    this.productEmitter.emit(this.newProduct);
    
    // this.products.push(this.newProduct)
  }
} 
