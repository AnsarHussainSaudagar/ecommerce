import { Component } from '@angular/core';
import { Product } from './models/product.model';
// Component Directive
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'ecommerce';

  products: Product[] = [
    {
      name: 'iPHone',
      decription: 'This is a costly mobile phone',
      price: 100,
      img: '../assets/images/iphone.webp',
    },
    {
      name: 'samsUNG TV',
      decription: 'TV with good quality',
      price: 260,
      img: '../assets/images/tv.jpeg',
    },
    {
      name: 'LG Fridge',
      decription: 'Fridge with 5 stars',
      price: 190,
      img: '../assets/images/fridge.jpeg',
    },
    
  ];

  addProduct(data : Product){
    // console.log(data);
    this.products.push(data);
    
    
  }
  
}
