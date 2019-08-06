import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Type } from '../Interfaces/Type';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent {

  types: Type[] = [
    {IsActive:true, display: 'Active'},
    {IsActive:false, display: 'Inactive'},
  ]

  constructor(private service:EmployeeService) { }

  employeeForm = new FormGroup({
    employeeName: new FormControl('', Validators.required),
    employeeType: new FormControl('', Validators.required),
    isActive: new FormControl('', Validators.required)
  })

  onSubmit() {
    console.log(this.employeeForm.value);
    this.service.createEmployee(this.employeeForm.value).subscribe((data) => {
      console.log('Data - ', data);
    })
  }
}
