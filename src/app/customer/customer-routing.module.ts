import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//components
import {CreateComponent} from '../customer/create/create.component';
import {LoginComponent} from '../customer/login/login.component';

//path config
const customerRoutes: Routes = [
  {path: 'register' , component: CreateComponent},
  {path: 'login' , component: LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes)
  ],
  exports:[RouterModule]
})
export class CustomerRoutingModule { }
