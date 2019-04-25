import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

// Rest api service
import {AccountRestapiService} from '../../services/account-restapi.service';
import { Customer } from '../../entity/customer-model';
import { Account } from 'src/app/entity/account-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  //form
  form:FormGroup;
  
  // @Input()
  cif =  localStorage.getItem("customerNumber");
  customer:Customer = new Customer;
  account = {accountNumber:'', accountName:'',balance:'',openDate: new Date,customerNumber: ''};

  constructor(private restApi:AccountRestapiService,private router:Router, private location: Location,private builder: FormBuilder) { }
  
  ngOnInit() {
    this.form = this.builder.group({
      customerNumber:['', [Validators.required,Validators.maxLength(8)]],
      customerName:['', [Validators.required,Validators.maxLength(8)]]
    })
  }

  create(){
    let account = new Account();
    account.accountName = this.form.controls['accountName'].value;
    account.balance = this.form.controls['balance'].value;
    this.customer.customerNumber = localStorage.getItem("customerNumber");
    account.customerNumber = this.customer.customerNumber;

    this.restApi.createAccount(account).subscribe((data:{}) => {
      this.account = data["data"];
      console.log(account);
      this.router.navigate(['account/list'])
    })
  }

  goBack() : void {
    this.location.back();
  }
}
