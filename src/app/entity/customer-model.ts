export class Customer {
    customerNumber:number;
    firstName:string;
    lastName:string;
    birthDate:string;
    username:string;
    password:string;

    constructor(customerNumber:number,firstName:string,lastName:string,birthDate:string,username:string,password:string){
        this.customerNumber = customerNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.username = username;
        this.password = password;
    }
}