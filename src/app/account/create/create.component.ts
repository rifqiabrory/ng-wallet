import { Component, OnInit, Input } from '@angular/core';
import { Location, DatePipe } from '@angular/common';
import { Router } from '@angular/router';

// Rest api service
import {AccountRestapiService} from '../../services/account-restapi.service';
import { Customer } from '../../entity/customer-model';
import { Account } from '../../entity/account-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  //form
  createFormGroup:FormGroup;

  currentDate = new Date();

  constructor(private pipeDate:DatePipe, private restApi:AccountRestapiService,private router:Router, private location: Location,private builder: FormBuilder) { }
  
  ngOnInit() {
    this.createFormGroup = this.builder.group({
      accountName:['', [Validators.required]],
      balance:['', [Validators.required]]
    })
  }

  get accountName(){
    return this.createFormGroup.get('accountName');
  }
  
  get balance(){
    return this.createFormGroup.get('balance');
  }

  create(){
    let account = new Account();
    let customer = new Customer();
    account.accountName = this.createFormGroup.controls['accountName'].value;
    account.balance = this.createFormGroup.controls['balance'].value;
    customer.customerNumber = localStorage.getItem('customerNumber');
    account.customer = customer;

    this.restApi.createAccount(account).subscribe((data:{}) => {
      account = data["data"];
      this.router.navigate(['account/list'])
    })
  }

  goBack() : void {
    this.location.back();
  }
}
