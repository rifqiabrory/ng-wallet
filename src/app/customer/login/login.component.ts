import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// Rest api service
import {CustomerRestapiService} from '../../services/customer-restapi.service';
// Entity
import {Customer} from '../../entity/customer-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //form
  form:FormGroup;

  // @Input()
  customer : Customer = {customerNumber: '',firstName:'',lastName:'',birthDate:'',username:'',password:''};
  userLog : Customer;
  responseCode:string;
  constructor(private restApi:CustomerRestapiService,private router:Router, private builder: FormBuilder) { }

  ngOnInit() {
    this.form = this.builder.group({
      username:['', [Validators.required,Validators.maxLength(8)]],
      password:['', [Validators.required,Validators.maxLength(8)]]
    })
  }

  //form validation
  isFieldValid(field:string){
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  displayFieldCss(field:string){
    return {
      'has-error' : this.isFieldValid(field),
      'has-feedback' : this.isFieldValid(field)
    };
  }

  // onSubmit(){
  //   console.log(this.form);
  //   if(this.form.valid){
  //     console.log('form submitted');
  //   }else{
  //     this.validateAllFormFields(this.form);
  //   }
  // }

  validateAllFormFields(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(
      field =>{
        console.log(field);
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({onlySelf:true});
        } else if(control instanceof FormGroup){
          this.validateAllFormFields(control);
        }
      });
  }

  reset(){
    this.form.reset();
  }

  async getAuth(){
    const data = await this.restApi.getAuthentication(this.customer).toPromise();
    this.responseCode = data["status"];
    this.userLog = data["data"];
    console.log(this.userLog);
    if (this.responseCode == "101") {
      localStorage.setItem("customerNumber", this.userLog.customerNumber);
      this.router.navigate(['dashboard']);
    } else {
      alert("Not Found!");
    }
  }

  create(customer){
    this.restApi.createCustomer(this.customer).subscribe((data:{}) => {
      this.customer = data["data"];
      this.router.navigate(['dashboard']);
    })
  }
}
