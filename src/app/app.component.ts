import { Component } from '@angular/core';
import { longStackSupport } from 'q';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-Bank';
  constructor(private router:Router) { }
  
  logout(){
    localStorage.removeItem("customerNumber");
    this.router.navigate(['login']);
  }
}