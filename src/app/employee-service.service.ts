import { Injectable } from '@angular/core';
import { Employee } from "./Employee";
import { AddDetailsComponent } from "./add-details/add-details.component";
import { DeleteDetailsComponent } from "./delete-details/delete-details.component";
import {EditDetailsComponent  } from "./edit-details/edit-details.component";
import {ViewDetailsComponent  } from "./view-details/view-details.component";
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders,HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  constructor(private http:HttpClient) {
   }
   URL='http://localhost:8080/SkillMap_Rest/api/emp/';
  
   getEmployee():Observable<Employee[]>
   {
     return this.http.get<Employee[]>(this.URL);
   }

   addEmployee(employee:Employee):Observable<Employee>{
     return this.http.post<Employee>(this.URL+"/add",+employee);
   }

   public deleteEmployee(employee)
   {
     return this.http.delete(this.URL+"/delete/"+employee.employeeId);
   }

   public editEmployee(employee:Employee)
   {
     return this.http.put<Employee>(this.URL+"/update",employee);
   }

   



}
