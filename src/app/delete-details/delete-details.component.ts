import { Component, OnInit } from '@angular/core';
import {Employee  } from "../Employee";
import {EmployeeServiceService  } from "../employee-service.service";
import {Routes } from "@angular/router";

@Component({
  selector: 'app-delete-details',
  templateUrl: './delete-details.component.html',
  styleUrls: ['./delete-details.component.css']
})
export class DeleteDetailsComponent implements OnInit {

  employee:Employee;

  constructor(private employeeService:EmployeeServiceService) { }

  ngOnInit() {
    this.viewEmployee();
  }

  viewEmployee():void{
    this.employeeService.getEmployee().subscribe(data=>{prompt("VALUE TO BE DELETED");});
  }
}
