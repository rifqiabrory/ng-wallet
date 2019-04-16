import { Component, OnInit } from '@angular/core';
import {Customer} from '../../customer-model';
import {CustomerService} from '../../customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() : void {
    this.customerService.getCustomers()
      .subscribe(heroes => this.customers = heroes.slice(1, 5));
  }


}
