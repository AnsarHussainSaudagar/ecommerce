import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { AddressesComponent } from '../addresses/addresses.component';
import { MyProfileComponent } from './my-profile.component';
import { authGuard } from '../auth.guard';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path: '',
    component: MyProfileComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      { path: 'user', component: UserComponent },
      { path: 'address', component: AddressesComponent },
    ],
  },
];

@NgModule({
  declarations: [
    UserComponent,
    AddressesComponent,
    MyProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MyProfileModule {
  constructor(){
    console.log("IN Profile module");
    
  } 
}
