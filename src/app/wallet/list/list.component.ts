import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WalletRestapiService } from 'src/app/services/wallet-restapi.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  //store data
  Wallets:any=[];

  constructor(private restApi:WalletRestapiService,private router:Router) { }

  ngOnInit() {
    //hardcode
    //this.loadWalletsBy(1880769);
  }

  loadWalletsBy(accountNumber) {
    return this.restApi.getWalletsBy(accountNumber).subscribe((data: {}) => {
        this.Wallets = data["data"];
    });
  }
}
