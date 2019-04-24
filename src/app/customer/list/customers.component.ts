import { Component, OnInit } from '@angular/core';
// Rest api service
import {CustomerRestapiService} from '../../services/customer-restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  //store data
  Customers:any=[];
  getCounts = 0;
  constructor(private restApi:CustomerRestapiService, private router:Router) { }
  ngOnInit() {
    if(localStorage.getItem("customerNumber") === null){
      this.router.navigate(['login']);
    }
    this.loadCustomers()
  }

  loadCustomers() {
    return this.restApi.getCustomers().subscribe((data: {}) => {
        this.Customers = data["data"];
        this.getCounts = Object.keys(data).length;
    });
  }

  delete(customerNumber) {
    if(window.confirm('are you want to delete ?')) {
      this.restApi.deleteCustomer(customerNumber).subscribe(data => {
        this.loadCustomers()
      })
    }
  }
}
