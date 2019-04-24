import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//Components
import {ListComponent} from '../transaction/list/list.component';
import { TopupComponent } from '../transaction/topup/topup.component';
import { TransferComponent } from '../transaction/transfer/transfer.component';
import { WithdrawComponent } from '../transaction/withdraw/withdraw.component';

//path config
const customerRoutes: Routes = [
  {path: 'list' , component: ListComponent},
  {path: 'topup' , component: TopupComponent},
  {path: 'transfer' , component: TransferComponent},
  {path: 'withdraw' , component: WithdrawComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes)
  ],
  exports:[RouterModule]
})
export class TransactionRoutingModule { }
