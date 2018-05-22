import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService  } from "../employee-service.service";
import {Employee } from "../Employee";
import {Routes} from "@angular/router";

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {

  employee:Employee = new Employee();
  constructor(private employeeService:EmployeeServiceService) { }

  ngOnInit() {
  }

  addEmployee(): void{
    this.employeeService.addEmployee(this.employee).subscribe(data=>{prompt("Employee Registered Successfully"); });
  }

}
