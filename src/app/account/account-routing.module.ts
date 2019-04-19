import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//components
import {CreateComponent} from '../account/create/create.component';
import {AccountsComponent} from '../account/list/accounts.component';
//path config
const accountRoutes: Routes = [
  {path: 'new', component: CreateComponent},
  {path: 'list', component: AccountsComponent}
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
