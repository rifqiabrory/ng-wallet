import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {CustomersComponent} from './customer/customers/customers.component';
import {CreateComponent} from './customer/create/create.component';

const routes: Routes = [
  {path: '' ,redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard' , component: DashboardComponent},
  {path: 'customers' , component: CustomersComponent},
  {path: 'new' , component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
