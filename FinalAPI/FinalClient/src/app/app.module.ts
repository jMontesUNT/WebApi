import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


// services 
import { EmployeeService } from './employee.service';
import { AuthService } from './auth.service';

import { AppRouterModule } from './app-router.module';
import { HttpClientModule } from '@angular/common/http';


//material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatCardModule, MatSelectModule, MatTableModule, MatToolbarModule, MatDialogModule, MatListModule } from '@angular/material';

//components
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

//forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    FooterComponent,
    HeaderComponent,
    NewEmployeeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    //material design
    BrowserAnimationsModule, MatButtonModule, MatTableModule,
    MatInputModule, MatCardModule, MatSelectModule, MatToolbarModule, MatDialogModule, MatListModule,
    ReactiveFormsModule, FormsModule,
  ],
  entryComponents:[UpdateEmployeeComponent],
  providers: [EmployeeService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
