import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
// Rest api service
import {CustomerRestapiService} from '../../services/customer-restapi.service';
// Entity
import {Customer} from '../../entity/customer-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //form
  form:FormGroup;

  customer : Customer = {customerNumber: '',firstName:'',lastName:'',birthDate:'',username:'',password:''};
  userLog : Customer;
  
  responseCode:string;

  constructor(private restApi:CustomerRestapiService,private router:Router, private builder: FormBuilder, private location:Location) { }

  ngOnInit() {
    this.form = this.builder.group({
      username:['', [Validators.required]],
      password:['', [Validators.required]]
    })
  }

  async getAuth(){
    const data = await this.restApi.getAuthentication(this.customer).toPromise();
    this.responseCode = data["status"];
    this.userLog = data["data"];
    if (this.responseCode == "101") {
      localStorage.setItem("customerNumber", this.userLog.customerNumber);
      this.router.navigate(['dashboard']);
    } else {
      alert("Not Found!");
    }
  }

  goBack() : void {
    this.location.back();
  }

  
  // create(customer){
  //   this.restApi.createCustomer(this.customer).subscribe((data:{}) => {
  //     this.customer = data["data"];
  //     this.router.navigate(['dashboard']);
  //   })
  // }


}
