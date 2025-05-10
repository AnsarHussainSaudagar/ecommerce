import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {
    // console.log(args);
    
    const minPrice : any = args[0];
    
    const filteredArr = value.filter((val) => {
      return val.price > minPrice
    });
    
    return filteredArr;
  }

}
