import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

import {Customer} from '../../entity/customer-model';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  customer: Customer;

  constructor(private route: ActivatedRoute, private customerService: CustomerService, private location: Location) { }

  ngOnInit() : void {
    this.getCustomerDetail();
  }

  getCustomerDetail() : void {
    const customerNumber = +this.route.snapshot.paramMap.get('customerNumber');
    this.customerService.getCustomerBy(customerNumber)
    .subscribe(customer => this.customer = customer);
  }

  goBack() : void {
    this.location.back();
  }
}
