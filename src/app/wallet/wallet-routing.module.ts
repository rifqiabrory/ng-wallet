import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//Components
import {CreateComponent} from '../wallet/create/create.component';
import { DetailComponent } from '../wallet/detail/detail.component';

//path config
const walletRoutes: Routes = [
  {path: 'new' , component: CreateComponent},
  {path: 'detail' , component: DetailComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(walletRoutes)
  ],
  exports:[RouterModule]
})
export class WalletRoutingModule { }
