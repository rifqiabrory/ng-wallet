import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//components
import { DetailComponent } from './detail/detail.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

//path config
const customerRoutes: Routes = [
  {path: 'profile' , component: DetailComponent},
  {path: 'dashboard' , component: DashboardComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes)
  ],
  exports:[RouterModule]
})
export class CustomerRoutingModule { }
