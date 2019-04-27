import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Form Module
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
//HttpClient Module
import {HttpClientModule} from '@angular/common/http';
//Routing
import { WalletRoutingModule } from '../wallet/wallet-routing.module';
//Compoonents
import { CreateComponent } from '../wallet/create/create.component';
import { DetailComponent } from '../wallet/detail/detail.component';
import {ListComponent} from '../wallet/list/list.component';
@NgModule({
  declarations: [
    CreateComponent,
    DetailComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    WalletRoutingModule
  ]
})
export class WalletModule { }
