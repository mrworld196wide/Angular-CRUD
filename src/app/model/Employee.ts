export class Employee {
    empId: number;
    name: string;
    city: string;
    state: string;
    emailId: string;
    contactNo: string;
    address: string;
    pinCode: string;

    constructor(empId: number, name: string, city: string, state: string, emailId: string, contactNo: string, address: string) {
        this.empId = 0;
        this.name = '';
        this.city = '';
        this.state = '';
        this.emailId = '';
        this.contactNo = '';
        this.address = '';
        this.pinCode = '';
    }
}