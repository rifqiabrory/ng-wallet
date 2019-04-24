import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//components
import {CreateComponent} from '../account/create/create.component';
import {AccountsComponent} from '../account/list/accounts.component';
import { DetailComponent } from '../account/detail/detail.component';
//path config
const accountRoutes: Routes = [
  {path: 'new', component: CreateComponent},
  {path: 'list', component: AccountsComponent},
  {path: 'detail/:accountNumber', component: DetailComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(accountRoutes)
  ],
  exports:[RouterModule]
})
export class AccountRoutingModule { }
