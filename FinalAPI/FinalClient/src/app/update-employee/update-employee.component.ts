import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Type } from '../Interfaces/Type';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

form:FormGroup;
id: number;

  constructor(private fb:FormBuilder,
              private dialogRef: MatDialogRef<UpdateEmployeeComponent>,
              @Inject(MAT_DIALOG_DATA){EmployeeName, EmployeeType, IsActive, Id}, 
              private service:EmployeeService) 
              {
                this.id = Id;

                this.form = fb.group({
                  employeeName: [EmployeeName, Validators.required],
                  employeeType: [EmployeeType, Validators.required],
                  isActive: [IsActive, Validators.required],
                })
  }

  types: Type[] = [
    {IsActive:true, display: 'Active'},
    {IsActive:false, display: 'Inactive'}
  ]

  close() {
    this.dialogRef.close();
  }

  save() {
    this.form.value.id = this.id;
    this.service.updateEmployee(this.id, this.form.value).subscribe((data) => {
      console.log('data - ', data);
    })
  }

  ngOnInit() {
  }

}
