import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  isSubmitting = false;
  newProduct: Product = {
    name: '',
    decription: '',
    price: '',
    img: '../assets/images/iphone.webp',
  };

  // productsService = new ProductsService();
  constructor(private productsService: ProductsService){

  }

  onSubmit(productForm : any){
    
    if(productForm.form.status === 'VALID'){
      this.isSubmitting = true;
      this.productsService.postProductData(this.newProduct).subscribe({
        next: (data) => {
          this.productsService.productSubject.next(true);
          this.isSubmitting = false;
          productForm.resetForm();
        },
        error: (error) => {
          console.error('Error adding product:', error);
          this.isSubmitting = false;
        }
      });
    } else {
      console.log("Form is invalid");
    }
  }
  
} 
