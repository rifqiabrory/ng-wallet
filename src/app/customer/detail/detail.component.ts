import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
// Rest api service
import {CustomerRestapiService} from '../../services/customer-restapi.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  Customer:any = {};

  constructor(private route: ActivatedRoute,private router:Router, private restApi:CustomerRestapiService, private location: Location) { }

  ngOnInit() : void {
    this.getCustomerDetail()
  }

  getCustomerDetail() : void {
    const customerNumber = this.route.snapshot.paramMap.get('customerNumber');
    this.restApi.getCustomerBy(customerNumber)
    .subscribe((data:{}) => {
      this.Customer = data["data"];
    })
  }

  updateCustomer(){
    if(window.confirm('are you want to update ?')){
      const customerNumber = this.route.snapshot.paramMap.get('customerNumber');
      this.restApi.updateCustomer(customerNumber,this.Customer)
      .subscribe((data:{}) => {
        this.Customer = data["data"];
        this.router.navigate(['/customer/list'])
      })
    }
  }

  goBack() : void {
    this.location.back();
  }
}
