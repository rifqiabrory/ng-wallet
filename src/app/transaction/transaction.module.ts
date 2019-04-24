import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Form Module
import {FormsModule} from '@angular/forms';
//HttpClient Module
import {HttpClientModule} from '@angular/common/http';
//Routing
import { TransactionRoutingModule } from '../transaction/transaction-routing.module';
//Compoonents
import { ListComponent } from '../transaction/list/list.component';
import { TopupComponent } from '../transaction/topup/topup.component';
import { TransferComponent } from '../transaction/transfer/transfer.component';
import { WithdrawComponent } from '../transaction/withdraw/withdraw.component';
@NgModule({
  declarations: [
    ListComponent,
    TopupComponent,
    TransferComponent,
    WithdrawComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }
