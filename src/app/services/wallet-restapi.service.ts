import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {Wallet} from '../entity/wallet-model';

@Injectable({
  providedIn: 'root'
})
export class WalletRestapiService {
  apiUrl = 'http://localhost:8070/api';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  
  createWallet(wallet) : Observable<Wallet> {
    return this.http.post<Wallet>(this.apiUrl + '/wallet', JSON.stringify(wallet), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getWalletsBy(accountNumber) : Observable<Wallet> {
    return this.http.get<Wallet>(this.apiUrl + '/wallets/' + accountNumber)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  deleteWalletBy(walletId) : Observable<Wallet> {
    return this.http.delete<Wallet>(this.apiUrl + '/wallet/' + walletId)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      //Get client-side error
      errorMessage = error.error.message;
    } else {
      //Get server-side error
      errorMessage = `Error code : ${error.status}\nMessage : ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
