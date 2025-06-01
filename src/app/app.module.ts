import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from './custom.pipe';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { UnknownUrlComponent } from './unknown-url/unknown-url.component';
import { authGuard } from './auth.guard';
import { ViewProductComponent } from './view-product/view-product.component';
const routes : Routes = [
  {path: '', component: ProductsComponent },
  {path: 'about-us', component: AboutUsComponent},
  {path: 'my-profile', component: MyProfileComponent, canActivate: [authGuard]},
  {path: 'unknown-url', component: UnknownUrlComponent},
  {path: 'view-product/:product_id', component: ViewProductComponent},
  {path: "**", redirectTo: 'unknown-url'},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestComponent,
    CustomPipe,
    AddProductComponent,
    ProductsComponent,
    AboutUsComponent,
    MyProfileComponent,
    UnknownUrlComponent,
    ViewProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
