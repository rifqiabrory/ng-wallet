import { Component, OnInit } from '@angular/core';

import {Customer} from '../entity/customer-model';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() :void {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers.slice(1, 5));
  }

 
}
