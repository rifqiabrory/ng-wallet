import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Form Module
import {FormsModule} from '@angular/forms';
//HttpClient Module
import {HttpClientModule} from '@angular/common/http';
//Datatables
import {DataTablesModule} from 'angular-datatables';
//Components
import {CreateComponent} from '../customer/create/create.component';
import {LoginComponent} from '../customer/login/login.component';
//Routing
import { CustomerRoutingModule } from './customer-routing.module';
@NgModule({
  declarations: [
    CreateComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
