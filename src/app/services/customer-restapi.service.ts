import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError, pipe} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import {Customer} from '../entity/customer-model';

@Injectable({
  providedIn: 'root'
})
export class CustomerRestapiService {
  //Define api url
  apiUrl = 'http://localhost:8070/api';
  
  constructor(private http: HttpClient) { }

  //Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  // Fetch list customers
  getCustomers() : Observable<Customer> {
    return this.http.get<Customer> (this.apiUrl + '/customers')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Fetch customer by id
  getCustomerBy(customerNumber) : Observable<Customer> {
    return this.http.get<Customer>(this.apiUrl + '/customer/' + customerNumber)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  createCustomer(customer) : Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl + '/customer', JSON.stringify(customer), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  updateCustomer(customerNumber, customer) : Observable<Customer> {
    return this.http.put<Customer>(this.apiUrl + '/customer/' + customerNumber, JSON.stringify(customer), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  deleteCustomer(customerNumber) {
    return this.http.delete<Customer>(this.apiUrl + '/customer/' + customerNumber, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getAuthentication(customer:Customer) : Observable<Customer>{
    return this.http.post<Customer>(this.apiUrl + '/login/', customer);
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
