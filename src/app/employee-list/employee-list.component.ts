import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmpEdu } from '../emp-edu';
import { EmpHistory } from '../emp-history';

import { EmployeeServiceService } from '../employee-service.service'


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  // employees !: Employee[];
  // empEducation !: EmpEdu[];
  // empHis !: EmpHistory[];

  employeeData : any = []

  constructor(private empService : EmployeeServiceService) { }

  ngOnInit(): void {

  this.getAllEmployee();
  console.log("Response data :", this.employeeData)
  }

  getAllEmployee(){
    this.empService.getAllEmployee().subscribe(res => {
      console.log("data is :", res)
      this.employeeData = res;
    })
  }

  editEmployee(id:any){
    console.log("ID is :", id)
    let payload = {}
    // this.empService.editEmployee(id,payload).subscribe(res =>
    //   {
    //     console.log("Edit employee:",res)
    //   })
  }
  deleteEmp(id:any){
    this.empService.deleteEmployee(id).subscribe(res =>{
      console.log("Delete Employee:",res)
    })
  }
}
