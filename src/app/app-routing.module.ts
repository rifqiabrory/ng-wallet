import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import { LoginComponent } from './customer/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login' , component: LoginComponent},
  {path: 'dashboard' , component: DashboardComponent},
  {path: 'customer' , loadChildren:'./customer/customer.module#CustomerModule'},
  {path: 'account' , loadChildren:'./account/account.module#AccountModule'},
  {path: 'transaction' , loadChildren: './transaction/transaction.module#TransactionModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
