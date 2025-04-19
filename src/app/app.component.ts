import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';

  product = {
    name: "Iphone",
    decription: "This is a costly mobile phone",
    price : 100,
    img: "../assets/images/iphone.webp"
  }


}
