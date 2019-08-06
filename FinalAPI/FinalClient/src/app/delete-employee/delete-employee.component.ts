import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  employee = {
    employeeName: '',
    employeeType: '',
    isActive: false
  }
  id;

  constructor(private route:ActivatedRoute, 
              private service:EmployeeService,
              private router:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getEmployee(this.id).subscribe((data:any) => {
      console.log(data);
      this.employee.employeeName = data.EmployeeName;
      this.employee.employeeType = data.EmployeeType;
      this.employee.isActive = data.IsActive;
    })
  }

  cancel() {
    this.router.navigate(['/']);
    console.log("cancel clicked");
  }

  confirm() {
    this.service.deleteEmployee(this.id).subscribe((data) => {
      console.log(data);
    })
    console.log("confirm clicked");

  }

}
