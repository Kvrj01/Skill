import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { DeleteDetailsComponent } from './delete-details/delete-details.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule} from "./app-routing/app-routing.module";
import {FormsModule} from "@angular/forms";





@NgModule({
  declarations: [
    AppComponent,
    AddDetailsComponent,
    DeleteDetailsComponent,
    EditDetailsComponent,
    ViewDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
