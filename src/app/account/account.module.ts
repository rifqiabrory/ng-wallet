import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//components
import {CreateComponent} from '../account/create/create.component';
import {AccountsComponent} from '../account/list/accounts.component';
//Routing
import {AccountRoutingModule} from './account-routing.module';


@NgModule({
  declarations: [
    CreateComponent,
    AccountsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
