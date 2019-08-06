import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { EmployeeElement } from '../Interfaces/EmployeeElement';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  displayedColumns: string[] = ['EmployeeName', 'EmployeeType', 'IsActive', 'Actions']
  dataSource;

  constructor(private service:EmployeeService, private dialog:MatDialog) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      console.log('result - ', data);
      this.dataSource = new MatTableDataSource<EmployeeElement>(data as EmployeeElement[]);
    })
  }

  updateEmployee(employee) {
    console.log(employee);
    this.dialog.open(UpdateEmployeeComponent, {
      data: {
        Id: employee.Id,
        EmployeeName: employee.EmployeeName,
        EmployeeType: employee.EmployeeType,
        IsActive: employee.IsActive
      }
    })
  }

}
