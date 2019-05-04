import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionRestapiService } from '../../services/transaction-restapi.service';
import { AccountRestapiService } from 'src/app/services/account-restapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  //store data
  Accounts:any=[];
  Transactions:any=[];

  constructor(private router:Router,private restApi:TransactionRestapiService,private restAApi:AccountRestapiService) { }

  ngOnInit() {
    const customerNumber = localStorage.getItem("customerNumber");
    this.loadAccountsBy(customerNumber);
  }

  //load data accounts by customerNumber
  loadAccountsBy(accountNumber) {
    return this.restAApi.getAccountsBy(accountNumber).subscribe((data: {}) => {
      this.Accounts = data["data"];
    });
  }

  //load data wallets by accounNumber
  loadTransactionsBy(accountNumber) {
    
    return this.restApi.getTransactionsBy(accountNumber).subscribe((data: {}) => {
        this.Transactions = data["data"];
    });
  }

}
