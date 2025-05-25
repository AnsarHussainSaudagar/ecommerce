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
  }
  
  // showProductsData(){
  //   this.productService.getProductsData().subscribe((products: any) => {
  //     this.myProducts = products
  //   });
  // }
  productObs$ : any = this.productService.getProductsData();

  onClickDelete(product_id : number){
    
    this.productService.deleteProductData(product_id).subscribe((data) => {
      // console.log(data);
      // this.showProductsData();
      this.productObs$ = this.productService.getProductsData();

    });
  }

  ngOnInit(){

    this.productService.productSubject.subscribe((data) => {
      // this.showProductsData();
      this.productObs$ = this.productService.getProductsData();
    });

    // this.showProductsData();

  }

  ngDoCheck(){
    
  }

  ngOnDestroy(){

  }
}
