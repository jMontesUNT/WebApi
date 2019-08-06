import {RouterModule, Routes} from '@angular/router';

//components
import {EmployeesComponent} from './employees/employees.component';
import {NewEmployeeComponent } from './new-employee/new-employee.component';
import {DeleteEmployeeComponent} from './delete-employee/delete-employee.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';

import { NgModule } from '@angular/core';

//route
const routes: Routes = [
    {path: 'employees', component:EmployeesComponent},
    {path: '', component:EmployeesComponent},
    {path: 'new-employee', component:NewEmployeeComponent},
    {path: 'delete-employee/:id', component:DeleteEmployeeComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'login', component:LoginComponent}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule{}