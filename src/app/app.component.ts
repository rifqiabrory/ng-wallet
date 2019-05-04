import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from './entity/customer-model';
import { CustomerRestapiService } from './services/customer-restapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit,AfterContentChecked{

  ngOnInit(): void {
    this.customerNumber = localStorage.getItem('customerNumber');
    this.loadCustomer();
  }
  ngAfterViewInit(): void {
    //this.customerNumber = localStorage.getItem('customerNumber');
    //this.loadCustomer();
  }
  ngAfterContentChecked(): void {
    //this.customerNumber = localStorage.getItem('customerNumber');
    //this.loadCustomer();
  }
  customerNumber;
  title = 'E-Bank';
  
  constructor(private router:Router,private restApi: CustomerRestapiService) { }

  logout(){
    localStorage.removeItem("customerNumber");
    this.router.navigate(["auth"]);
  }

  // customer:Customer[];
  customer = {customerNumber:'',firstName:'',lastName:'',birthDate:'',username:'',password:''};
  loadCustomer(){
    const customerNumber = localStorage.getItem('customerNumber');
    //const customer =
    this.restApi.getCustomerBy(customerNumber).subscribe(
      result => {
        this.customer = result["data"];
      }
    );
    
  }

}