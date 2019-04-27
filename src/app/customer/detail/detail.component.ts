import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Customer } from 'src/app/entity/customer-model';
import { CustomerRestapiService } from '../../services/customer-restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  Customer:any = {};
  constructor(private location:Location,private restApi: CustomerRestapiService) { }

  ngOnInit() {
    this.loadCustomer();
  }
  
  customer:Customer = {customerNumber:'',firstName:'',lastName:'',birthDate:'',username:'',password:''};
  loadCustomer(){
    const customerNumber = localStorage.getItem('customerNumber');
    this.restApi.getCustomerBy(customerNumber).subscribe(
      result => {
        this.customer = result["data"];
      }
    );
    
  }

  goBack(){
    this.location.back();
  }
}
