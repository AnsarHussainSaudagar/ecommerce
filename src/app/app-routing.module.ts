import { Routes } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { AddressesComponent } from "./addresses/addresses.component";
import { authGuard } from "./auth.guard";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { ProductsComponent } from "./products/products.component";
import { UnknownUrlComponent } from "./unknown-url/unknown-url.component";
import { UserComponent } from "./user/user.component";
import { ViewProductComponent } from "./view-product/view-product.component";

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'about-us', 
    loadComponent: () => import('./about-us/about-us.component').then(c => c.AboutUsComponent)
  },
  {
    path: 'my-profile',
    loadChildren : () => import('./my-profile/my-profile.module').then(m => m.MyProfileModule)
  },
  { path: 'unknown-url', component: UnknownUrlComponent },
  { path: 'view-product/:product_id', component: ViewProductComponent },
  { path: '**', redirectTo: 'unknown-url' },
];

export default routes;
