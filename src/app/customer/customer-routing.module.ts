import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//components
import {CreateComponent} from '../customer/create/create.component';
import { CustomersComponent } from './list/customers.component';
import { DetailComponent } from '../customer/detail/detail.component';
//path config
const customerRoutes: Routes = [
  {path: 'list' , component: CustomersComponent},
  {path: 'new' , component: CreateComponent},
  {path: 'detail/:customerNumber' , component: DetailComponent}
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
