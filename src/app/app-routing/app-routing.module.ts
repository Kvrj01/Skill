import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDetailsComponent } from "./add-details/add-details.component";
import { DeleteDetailsComponent } from "./delete-details/delete-details.component";
import {EditDetailsComponent  } from "./edit-details/edit-details.component";
import {ViewDetailsComponent  } from "./view-details/view-details.component";
import {RouterModule,Routes} from "@angular/router";

const routes:Routes =[
  {path:'View',component:ViewDetailsComponent},
  {path:'Add',component:AddDetailsComponent},
  {path:'Edit',component:EditDetailsComponent},
  {path:'Delete',component:DeleteDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
}
)
export class AppRoutingModule { }
