import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ProductsService } from './products.service';

export const authGuard: CanActivateFn = (route, state) => {

  const productService = inject(ProductsService)

  if(productService.isLogin){
    return true;
  }
  alert("Please login for going on my Profile");
  return false;
};
