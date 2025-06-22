import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../products.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenWordsValidator } from '../validators/forbidden-words.validator';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  productForm: FormGroup;
  isSubmitting = false;
  // newProduct: Product = {
  //   name: '',
  //   decription: '',
  //   price: '',
  //   img: '../assets/images/iphone.webp',
  // };

  // productsService = new ProductsService();
  constructor(private productsService: ProductsService, private fb : FormBuilder){
    this.productForm = this.fb.group({
      'name' : ['', [Validators.required, Validators.minLength(4), forbiddenWordsValidator()]],
      'description': [''],
      'price'  :[null]
    });
    // this.productForm = new FormGroup({
    //   'name' : new FormControl('', [Validators.required, Validators.minLength(4), forbiddenWordsValidator()]),
    //   'description': new FormControl(''),
    //   'price': new FormControl(null)
    // });
  }

  // onSubmit(productForm : any){
    
  //   if(productForm.form.status === 'VALID'){
  //     this.isSubmitting = true;
  //     this.productsService.postProductData(this.newProduct).subscribe({
  //       next: (data) => {
  //         this.productsService.productSubject.next(true);
  //         this.isSubmitting = false;
  //         productForm.resetForm();
  //       },
  //       error: (error) => {
  //         console.error('Error adding product:', error);
  //         this.isSubmitting = false;
  //       }
  //     });
  //   } else {
  //     console.log("Form is invalid");
  //   }
  // }

  submitted : boolean = false;
  get name(){
    return this.productForm.get('name');
  }

  onSubmit(){

    console.log(this.productForm);
    this.submitted = true;
    
    if(this.productForm.status === 'VALID'){
      
      this.productsService.postProductData(this.productForm.value).subscribe({
        next: (data) => {
          this.productsService.productSubject.next(true);
        },
        error: (error) => {
          console.error('Error adding product:', error);
        }
      });
    } else {
      console.log("Form is not valid");
      
    }
    
  }
  
} 
