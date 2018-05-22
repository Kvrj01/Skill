import { Component, OnInit } from '@angular/core';
import { Employee } from "../Employee";
import { EmployeeServiceService } from "../employee-service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  employee:Employee[];

  constructor(private employeeService:EmployeeServiceService  ) { }

  ngOnInit() {
    this.ViewEmployee();
  }

  ViewEmployee():void
  {
    this.employeeService.getEmployee().subscribe(data=>this.employee= data);
  }
    

  deleteEmployee(employee:Employee):void{
    this.employeeService.deleteEmployee(employee).subscribe(
      data=>{this.employee=this.employee.filter(emp=>emp!==employee);
    }
  )
  }
}
