import { Component, Input } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  myProducts = this.productService.products
  
  @Input() details : any = 0;
  
  constructor(private productService: ProductsService){
    console.log(this.details);
  }
  /* 

  */

  ngOnInit(){
    console.log(this.details);
  }

  ngDoCheck(){
    console.log("Do check");
    
  }

  ngOnDestroy(){

  }
}
