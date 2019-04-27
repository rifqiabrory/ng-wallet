import { Component, OnInit } from '@angular/core';

import { Customer } from '../entity/customer-model';
import { CustomerRestapiService } from '../services/customer-restapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(private restApi: CustomerRestapiService) { }

  ngOnInit() {
    this.loadCustomer()
  }
  
  customer = {customerNumber:'',firstName:'',lastName:'',birthDate:'',username:'',password:''};
  loadCustomer(){
    const customerNumber = localStorage.getItem('customerNumber');
    this.restApi.getCustomerBy(customerNumber).subscribe(
      result => {
        this.customer = result["data"];
      }
    );
    
  }

}
