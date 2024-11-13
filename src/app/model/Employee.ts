export class EmployeeModel {
    empId: number;
    name: string;
    city: string;
    state: string;
    emailId: string;
    contactNo: string;
    address: string;
    pinCode: string;

    constructor(
        empId: number = 0, 
        name: string = '', 
        city: string = '', 
        state: string = '', 
        emailId: string = '', 
        contactNo: string = '', 
        address: string = '',
        pinCode: string = ''
    ) {
        this.empId = empId;
        this.name = name;
        this.city = city;
        this.state = state;
        this.emailId = emailId;
        this.contactNo = contactNo;
        this.address = address;
        this.pinCode = pinCode;
    }
}
