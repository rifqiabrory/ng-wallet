import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {CreateComponent} from '../customer/create/create.component';
import { CustomersComponent } from '../customer/customers/customers.component';
import { DetailComponent } from '../customer/detail/detail.component';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  declarations: [
    CreateComponent,
    CustomersComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
