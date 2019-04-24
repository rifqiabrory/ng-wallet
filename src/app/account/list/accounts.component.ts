import { Component, OnInit } from '@angular/core';
// Rest api service
import {AccountRestapiService} from '../../services/account-restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  
  //store data
  Accounts:any=[];
  
  constructor(private restApi:AccountRestapiService,private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem("customerNumber") === null){
      this.router.navigate(['login']);
    }
    const cif = localStorage.getItem("customerNumber");
    this.loadAccountsBy(cif);
  }

  loadAccountsBy(customerNumber) {
    return this.restApi.getAccountsBy(customerNumber).subscribe((data: {}) => {
        this.Accounts = data["data"];
    });
  }

  delete(accountNumber) {
    if(window.confirm('are you want to delete ?')) {
      this.restApi.deleteAccount(accountNumber).subscribe(data => {
        this.loadAccountsBy(1095466);
      })
    }
  }

}
