import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl: string = 'http://localhost:62392/api/employees/'

  constructor(private http:HttpClient) { }

  getEmployee(id) {
    return this.http.get(this.baseUrl+'/'+id);
  }

  getAll() {
    return this.http.get(this.baseUrl);
  }

  createEmployee(employee) {
    return this.http.post(this.baseUrl, employee);
  }

  updateEmployee(id, employee) {
    return this.http.put(this.baseUrl+'/'+id, employee);
  }

  deleteEmployee(id) {
    return this.http.delete(this.baseUrl+'/'+id);
  }
}
