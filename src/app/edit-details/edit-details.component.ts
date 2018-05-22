import { Component, OnInit } from '@angular/core';
import {Employee  } from "../Employee";
import {EmployeeServiceService } from "../employee-service.service";
import {Routes} from '@angular/router';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  employee:Employee = new Employee();
  constructor(private employeeService :EmployeeServiceService)
  {}

  ngOnInit() {
  }

  editEmployee():void{
    this.employeeService.editEmployee(this.employee).subscribe(data=>{prompt("DO YOU WANT TO CONTINUE ?");
  });
  }

}
