import { Component, OnInit } from '@angular/core';
// Rest api service
import {AccountRestapiService} from '../../services/account-restapi.service';
import { WalletRestapiService } from '../../services/wallet-restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  
  //store data
  Accounts:any=[];
  
  //store data
  Wallets:any=[];

  constructor(private restWApi:WalletRestapiService,private restApi:AccountRestapiService,private router:Router) { }

  ngOnInit() {
    const cif = localStorage.getItem("customerNumber");
    this.loadAccountsBy(cif);
  }
  //load data account by customerNumber
  loadAccountsBy(customerNumber) {
    return this.restApi.getAccountsBy(customerNumber).subscribe((data: {}) => {
        this.Accounts = data["data"];
    });
  }
  //load data wallets by accounNumber
  loadWalletsBy(accountNumber) {
    return this.restWApi.getWalletsBy(accountNumber).subscribe((data: {}) => {
        this.Wallets = data["data"];
    });
  }

  deleteWallet(walletId) {
    if(window.confirm('are you want to delete ?')) {
      this.restWApi.deleteWalletBy(walletId).subscribe(data => {
        this.router.navigate(['account/list'])
      })
    }
  }

  delete(accountNumber) {
    if(window.confirm('are you want to delete ?')) {
      const cif = localStorage.getItem("customerNumber");
      this.restApi.deleteAccount(accountNumber).subscribe(data => {
        this.loadAccountsBy(cif);
      })
    }
  }

}
