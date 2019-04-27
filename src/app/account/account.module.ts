import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
//Form Module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//HttpClient Module
import { HttpClientModule } from '@angular/common/http';
//Datatables
import {DataTablesModule} from 'angular-datatables';
//components
import {CreateComponent} from '../account/create/create.component';
import {AccountsComponent} from '../account/list/accounts.component';
import {DetailComponent} from '../account/detail/detail.component';
//Routing
import {AccountRoutingModule} from './account-routing.module';


@NgModule({
  declarations: [
    CreateComponent,
    AccountsComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    AccountRoutingModule
  ],
  providers:[DatePipe]
})
export class AccountModule { }
