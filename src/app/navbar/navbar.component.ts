import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logo_name = "Ecommerce"
  isEnable = true
  search = "";

  currentDate = new Date();

  onInputSearch(e: any){
    // console.log(e.data);
    this.isEnable = false;
    // if(e.data != null){
    //   this.search += e.data
    // }
    // console.log(this.search);
    
  }
}
