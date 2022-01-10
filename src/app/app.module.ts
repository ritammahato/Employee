import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EducationDetailComponent } from './education-detail/education-detail.component';
import { EmployeementHistoryComponent } from './employeement-history/employeement-history.component';
import { FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    EducationDetailComponent,
    EmployeementHistoryComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormBuilder,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
