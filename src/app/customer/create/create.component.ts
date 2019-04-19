import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

// Rest api service
import {CustomerRestapiService} from '../../services/customer-restapi.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @Input()
  customer = {firstName:'',lastName:'',birthDate:'',username:'',password:''};

  constructor(private restApi:CustomerRestapiService,private router:Router, private location: Location) { }

  ngOnInit() {
  }

  create(customer){
    this.restApi.createCustomer(this.customer).subscribe((data:{}) => {
      this.customer = data["data"];
      this.router.navigate(['customer/list'])
    })
  }

  goBack() : void {
    this.location.back();
  }

}
