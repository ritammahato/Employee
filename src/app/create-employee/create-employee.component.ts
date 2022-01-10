import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  // employee: Employee = new Employee();
  employeeData:any
  isEmpFormVisible : boolean = true;
  isEduDetFormVisible : boolean = false;
  isEmpHisFormVisible : boolean = false;

  allPersonalDetails = this.employeeService.getAllEmployee();

  personalDetailForm = this.formBuilder.group({

    eId: '',
    eFName: '',
    eLName: '',
    eDob: ''
  });

  allEduDetails = this.employeeService.getAllEmployee();

  educationDetailForm = this.formBuilder.group({

    eYop: '',
    eInstituteName: '',
    ePercentage: ''
  });

  allPreComDetails = this.employeeService.getAllEmployee();

  preComDetailForm = this.formBuilder.group({
    
    ePreComName: '',
    ePreComRole: '',
    ePreComStartDate: '',
    ePreComEndDate: ''
  });

  constructor(
    private employeeService: EmployeeServiceService, 
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
  }



  addEmployeeData() {
    
    
  }
  empEduDetail(){
    
  }
  empHistoryDetail(){

  }

  eduDetailForm(){
  this.isEmpFormVisible = false;
  this.isEduDetFormVisible = true;
  }

  empHistoryForm(){
  // this.isEmpFormVisible = false;
  this.isEduDetFormVisible = false;
  this.isEmpHisFormVisible = true;
  }

  saveFinalData(){
    this.employeeService.addEmployee(this.employeeData).subscribe(
      data=>{
        alert("Employee Data Insert Successfully");
      },
      error=>
        alert("Sorry Unable to insert Employee Data")
      
      )
  }
  

}
