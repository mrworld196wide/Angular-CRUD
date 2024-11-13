import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmployeeModel } from './model/Employee';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  employeeForm: FormGroup= new FormGroup({});
  employeeObj: EmployeeModel = new EmployeeModel();
  employeeList: EmployeeModel[] = [];

  constructor(){
    debugger;
    this.createForm();
    const oldData = localStorage.getItem('EmpData');
    if(oldData != null){
      const parseData = JSON.parse(oldData);
      this.employeeList = parseData;
    }
  }
  
  createForm(){
    this.employeeForm= new FormGroup({
      empId: new FormControl(this.employeeObj.empId),
      name: new FormControl(this.employeeObj.name),
      city: new FormControl(this.employeeObj.city),
      state: new FormControl(this.employeeObj.state),
      emailId: new FormControl(this.employeeObj.emailId),
      contactNo: new FormControl(this.employeeObj.contactNo),
      address: new FormControl(this.employeeObj.address),
      pinCode: new FormControl(this.employeeObj.pinCode)
      })
  }

  onSave(){
    debugger;
    const oldData = localStorage.getItem('EmpData');
    if(oldData != null){
      const parseData = JSON.parse(oldData);
      this.employeeForm.controls['empId'].setValue(parseData.length+1);
      this.employeeList.unshift(this.employeeForm.value);
    } else{
      this.employeeList.unshift(this.employeeForm.value);
      
    }
    localStorage.setItem('EmpData', JSON.stringify(this.employeeList));
  }
}
