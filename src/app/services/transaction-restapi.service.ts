import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {Transaction} from '../entity/transaction-model';
import {TransactionType} from '../entity/transaction-type-model';

@Injectable({
  providedIn: 'root'
})
export class TransactionRestapiService {
  apiUrl = 'http://localhost:8070/api';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  getTransactionsBy(accountNumber) : Observable<Transaction> {
    return this.http.get<Transaction> (this.apiUrl + '/transactions/' + accountNumber)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  topup(topup) : Observable<Transaction> {
    return this.http.post<Transaction>(this.apiUrl + '/transaction/topup', JSON.stringify(topup), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  transfer(accountNumber) : Observable<Transaction> {
    return this.http.post<Transaction>(this.apiUrl + '/transaction/transfer', JSON.stringify(accountNumber), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  withdraw(accountNumber) : Observable<Transaction> {
    return this.http.post<Transaction>(this.apiUrl + '/transaction/withdraw', JSON.stringify(accountNumber), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getTransactionType() : Observable<TransactionType> {
    return this.http.get<TransactionType> (this.apiUrl + '/transactiontype')
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
