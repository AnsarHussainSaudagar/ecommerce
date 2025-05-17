import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

// Component Directive
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'ecommerce';
  error = "";
  // nameArr : any = [];
  // nameObservable$ = of('Rahul', 'Ankush', 'Rohit');
  // constructor(){
  //   const observable$ = new Observable((observer) => {
  //     observer.next(1);
  //     observer.next(2)
  //     observer.next(3)
  //     observer.next(4)
  //     observer.complete();
  //   });
  //   // const observable$ = of(1, 2, "string", 4);
  //   // const arr = [1, 2, 3, 4];

  //   observable$.subscribe(
  //     (data) => {
  //       console.log(data);
  //     },
  //     (err) => {
  //       // console.error("err = "  +err);
  //       this.error = err;
  //     }, () => {
  //       console.log("my observable is completed");
        
  //     }
  //   );
    // observable$.subscribe((data : any) => {
    //   console.log(data);
    // });
     
      // console.log(1);
      // console.log(2);
      // console.log(3);
      // console.log(4);
    
  // }
  
  userDetails = {
    name: "Ansar",
    type: "Customer",
    cart: 0
  }
  
}
