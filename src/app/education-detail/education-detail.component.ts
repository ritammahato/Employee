import { Component, OnInit } from '@angular/core';
import { EmpEdu } from '../emp-edu';


@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.css']
})
export class EducationDetailComponent implements OnInit {

  empEdu: EmpEdu = new EmpEdu;

  // empEducation !: EmpEdu[];
  constructor() { }

  ngOnInit(): void {
  }
  // this.empEducation = [{
  //      "eYop": "2021",
  //      "eInstituteName": "UEM",
  //      "ePercentage": "67.61%"
  // }];

  empEduDetail(){
    console.log(this.empEdu)
  }

}

