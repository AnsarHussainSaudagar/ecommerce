import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() myProducts : any;

  ngOnInit(){
    console.log(this.myProducts);
    
  }
}
