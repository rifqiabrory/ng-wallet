export class Customer {
    customerNumber:number;
    firstName:string;
    lastName:string;
    birthDate:string;
    username:string;
    password:string;

    constructor(customerNumber,firstName,lastName,birthDate,username,password){
        this.customerNumber = customerNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.username = username;
        this.password = password;
    }
}