import { Component, Input } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  myProducts : any = [];
  
  @Input() details : any = 0;
  
  constructor(private productService: ProductsService){
    this.productService.getProductsData().subscribe((products: any) => {
      this.myProducts = products
    })
  }

  ngOnInit(){
  }

  ngDoCheck(){
    
  }

  ngOnDestroy(){

  }
}
