import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TransactionRestapiService } from 'src/app/services/transaction-restapi.service';
import { Transaction } from '../../entity/transaction-model';
import { AccountRestapiService } from 'src/app/services/account-restapi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.css']
})
export class TopupComponent implements OnInit {
  //form
  createFormGroup:FormGroup;
  
  Accounts:any[];
  @Input()
  topup ={accountNumber:'',anCredit:'', amount:'', transactionType:''};
  constructor(private builder: FormBuilder,private restapi: TransactionRestapiService,private restAapi: AccountRestapiService, private router:Router, private location: Location) { }

  ngOnInit() {
    this.createFormGroup = this.builder.group({
      anCredit:['', [Validators.required]],
      amount:['', [Validators.required]]
    })

    const cif = localStorage.getItem("customerNumber");
    this.loadAccountsBy(cif);
  }

  get anCredit(){
    return this.createFormGroup.get('anCredit');
  }
  
  get amount(){
    return this.createFormGroup.get('amount');
  }

  loadAccountsBy(customerNumber) {
    return this.restAapi.getAccountsBy(customerNumber).subscribe((data: {}) => {
        this.Accounts = data["data"];
    });
  }

  create(){
    this.topup.anCredit = this.createFormGroup.controls['anCredit'].value;
    this.topup.amount = this.createFormGroup.controls['amount'].value;
    this.restapi.topup(new Transaction(null, null, null, this.topup.anCredit, this.topup.amount, 1, this.topup.anCredit)).subscribe((data:{}) => {
      this.topup = data["data"];
      this.router.navigate(['transaction/list']);
    })
  }

  goBack() : void {
    this.location.back();
  }

}
