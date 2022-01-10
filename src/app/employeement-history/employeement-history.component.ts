import { Component, OnInit } from '@angular/core';
import { EmpHistory } from '../emp-history';

@Component({
  selector: 'app-employeement-history',
  templateUrl: './employeement-history.component.html',
  styleUrls: ['./employeement-history.component.css']
})
export class EmployeementHistoryComponent implements OnInit {

  empHistory: EmpHistory = new EmpHistory;

  // empHis !: EmpHistory[];

  constructor() { }

  ngOnInit(): void {
    // this.empHis = [{
    //      "ePreComName": "CodeThunder",
    //      "ePreComRole": "Developer",
    //      "ePreComStartDate": "12.12.12",
    //      "ePreComEndDate": "12.12.21"
    //    }];
  }

  empHistoryDetail() {
    console.log(this.empHistory)
  }

}
