import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './customer/create/create.component';
import { CustomersComponent } from './customer/customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './customer/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    CustomersComponent,
    DashboardComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
