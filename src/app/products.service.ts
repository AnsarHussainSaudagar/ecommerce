import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
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
}
