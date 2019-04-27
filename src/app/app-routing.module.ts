import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import { NotauthComponent } from './notauth/notauth.component';
import { AuthenticationGuardService } from './security/authentication-guard.service';
import { CreateComponent } from './customer/create/create.component';
import { LoginComponent } from './customer/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/customer/dashboard', pathMatch: 'full'},
  {path: 'auth' , component: NotauthComponent},
  {path: 'register' , component: CreateComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'customer' , loadChildren:'./customer/customer.module#CustomerModule',canActivate: [AuthenticationGuardService]},
  {path: 'account' , loadChildren:'./account/account.module#AccountModule',canActivate: [AuthenticationGuardService]},
  {path: 'wallet' , loadChildren: './wallet/wallet.module#WalletModule',canActivate: [AuthenticationGuardService]},
  {path: 'transaction' , loadChildren: './transaction/transaction.module#TransactionModule',canActivate: [AuthenticationGuardService]}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
