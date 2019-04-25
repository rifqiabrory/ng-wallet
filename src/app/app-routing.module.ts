import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import { NotauthComponent } from './notauth/notauth.component';

const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth' , component: NotauthComponent},
  {path: 'dashboard' , component: DashboardComponent},
  {path: 'customer' , loadChildren:'./customer/customer.module#CustomerModule'},
  {path: 'account' , loadChildren:'./account/account.module#AccountModule'},
  {path: 'wallet' , loadChildren: './wallet/wallet.module#WalletModule'},
  {path: 'transaction' , loadChildren: './transaction/transaction.module#TransactionModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
