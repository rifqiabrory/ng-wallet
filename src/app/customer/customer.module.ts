import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Form Module
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
//HttpClient Module
import {HttpClientModule} from '@angular/common/http';
//Datatables
import {DataTablesModule} from 'angular-datatables';
//Components
import { DetailComponent } from './detail/detail.component';
//Routing
import { CustomerRoutingModule } from './customer-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
  declarations: [
    DetailComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
