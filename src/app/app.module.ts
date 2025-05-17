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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestComponent,
    CustomPipe,
    AddProductComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // import { HttpClientModule } from '@angular/common/http';
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
