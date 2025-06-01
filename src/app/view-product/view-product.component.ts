import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  constructor(private productService: ProductsService, private route: ActivatedRoute){}

  product :Product ={
    name: '',
    decription: '',
    price: 0
  }

  isCostly : boolean = false;

  ngOnInit(){

    this.route.queryParams.subscribe((query : any) => {
      // console.log(query);
      if(query.type === "costly"){
        this.isCostly = true;
      }
      
    })


    this.route.params.subscribe((params : any) => {
      this.productService.getSingleProduct(params.product_id).subscribe((product: any) => {
          this.product = product;
      });
    });
    
  }
}
