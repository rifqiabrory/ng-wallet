import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Form Module
import {FormsModule} from '@angular/forms';
//HttpClient Module
import {HttpClientModule} from '@angular/common/http';
//Routing
import { WalletRoutingModule } from '../wallet/wallet-routing.module';
//Compoonents
import { CreateComponent } from '../wallet/create/create.component';
import { DetailComponent } from '../wallet/detail/detail.component';
@NgModule({
  declarations: [
    CreateComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    WalletRoutingModule
  ]
})
export class WalletModule { }
