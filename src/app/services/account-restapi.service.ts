import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import {Account} from '../entity/account-modal';

@Injectable({
  providedIn: 'root'
})
export class AccountRestapiService {
  //Define api url
  apiUrl = 'http://localhost:8070/api';

  constructor(private http: HttpClient) { }

  //Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  // Fetch list accounts by customerNumber
  getAccountsBy(customerNumber) : Observable<Account> {
    return this.http.get<Account> (this.apiUrl + '/accounts/' + customerNumber)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getAccountBy(accountNumber) : Observable<Account> {
    return this.http.get<Account>(this.apiUrl + '/account/' + accountNumber)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  createAccount(account) : Observable<Account> {
    return this.http.post<Account>(this.apiUrl + '/account', JSON.stringify(account), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  updateAccount(accountNumber, account) : Observable<Account> {
    return this.http.put<Account>(this.apiUrl + '/account/' + accountNumber, JSON.stringify(account), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  deleteAccount(accountNumber) {
    return this.http.delete<Account>(this.apiUrl + '/account/' + accountNumber, this.httpOptions)
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
