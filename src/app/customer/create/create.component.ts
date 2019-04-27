import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

// Rest api service
import {CustomerRestapiService} from '../../services/customer-restapi.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  //form
  createFormGroup:FormGroup;
  
  @Input()
  customer = {firstName:'',lastName:'',birthDate:'',username:'',password:''};

  responseCode:string;
  message:string;

  constructor(private builder: FormBuilder,private restApi:CustomerRestapiService,private router:Router, private location: Location) { }

  ngOnInit() {
    this.createFormGroup = this.builder.group({
      firstName:['', [Validators.required]],
      lastName:['', [Validators.required]],
      birthDate:['',[Validators.required]],
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  create(){
    this.customer.firstName  =  this.createFormGroup.controls['firstName'].value;
    this.customer.lastName  =  this.createFormGroup.controls['lastName'].value;
    this.customer.birthDate  =  this.createFormGroup.controls['birthDate'].value;
    this.customer.username  =  this.createFormGroup.controls['username'].value;
    this.customer.password  =  this.createFormGroup.controls['password'].value;

    this.restApi.createCustomer(this.customer).subscribe((data:{}) => {
      this.customer = data["data"];
      this.router.navigate(['auth'])
    })
  }

  goBack() : void {
    this.location.back();
  }

}
