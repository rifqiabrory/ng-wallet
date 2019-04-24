import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TransactionRestapiService } from 'src/app/services/transaction-restapi.service';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.css']
})
export class TopupComponent implements OnInit {

  @Input()
  topup ={accountNumber:'',anCredit:'', amount:'', transactionType:''};
  
  constructor(private restapi: TransactionRestapiService, private router:Router, private location: Location) { }

  ngOnInit() {
  }

  create(){
    this.restapi.topup(this.topup).subscribe((data:{}) => {
      this.topup = data["data"];
      this.router.navigate(['transaction/list']);
      console.log(this.topup);
    })
  }

  goBack() : void {
    this.location.back();
  }

}
