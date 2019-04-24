import { Component, OnInit } from '@angular/core';

import {Customer} from '../entity/customer-model';
import {CustomerService} from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customerService:CustomerService,private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem("customerNumber") === null){
      this.router.navigate(['login']);
    }
    // this.getCustomers();
  }

  // getCustomers() :void {
  //   this.customerService.getCustomers()
  //     .subscribe(customers => this.customers = customers.slice(1, 5));
  // }

 
}
