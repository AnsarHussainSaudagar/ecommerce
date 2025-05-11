import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { ProductsService } from './products.service';
// Component Directive
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'ecommerce';
  
  userDetails = {
    name: "Ansar",
    type: "Customer",
    cart: 0
  }
  
}
