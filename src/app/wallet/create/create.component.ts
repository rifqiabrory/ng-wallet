import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {Account} from '../../entity/account-model';
import {Wallet} from '../../entity/wallet-model';
import { WalletRestapiService } from '../../services/wallet-restapi.service';
import { AccountRestapiService } from '../../services/account-restapi.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  //form
  createFormGroup:FormGroup;

  account:Account;
  wallet:Wallet;

  @Input()
  input = {description:'',accountNumber:''};
  
  responseCode:string;
  constructor(private builder: FormBuilder,private location:Location,private restApi:WalletRestapiService,private router:Router,private restAApi:AccountRestapiService) { }

  ngOnInit() {
    this.createFormGroup = this.builder.group({
      accountNumber:['', [Validators.required]],
      description:['', [Validators.required]]
    })
    
    this.loadAccountsBy();    
  }

  get accountNumber(){
    return this.createFormGroup.get('accountNumber');
  }
  
  get description(){
    return this.createFormGroup.get('description');
  }

  createNew(){
    let wallet = new Wallet();
    let account = new Account();
    wallet.description = this.createFormGroup.controls['description'].value;
    account.accountNumber = this.createFormGroup.controls['accountNumber'].value;
    wallet.account = account;

    this.restApi.createWallet(wallet).subscribe((data:{}) => {
      this.wallet = data["data"];
      this.router.navigate(['account/list'])
    })
  }

  async loadAccountsBy() {
    const customerNumber = localStorage.getItem("customerNumber");
    const accounts = await this.restAApi.getAccountsBy(customerNumber).toPromise();
    this.responseCode = accounts["status"];
    if (this.responseCode == "101") {
      this.account = accounts["data"];
    } else {
      alert("Accounts list doesn't exist!");
    }
  }

  goBack() : void {
    this.location.back();
  }

}
