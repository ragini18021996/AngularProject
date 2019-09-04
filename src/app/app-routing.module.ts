import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import {EmployeeNameComponent} from './employee-name/employee-name.component'
import { CommonModule } from '@angular/common';



export const RouterTable: Routes = [
  {path : '', 
  component : HomeComponent},
  {
    path:'Employees',
    component:EmployeeComponent
  },
  {
    path :'searchEmployeeName/:Id' , 
    component : EmployeeNameComponent
  },
  {
    path :'searchEmployee' , 
    component : EmployeeSearchComponent
  }
];

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations :[HomeComponent, EmployeeComponent, EmployeeSearchComponent,EmployeeNameComponent],
  exports: [HomeComponent,EmployeeComponent,EmployeeSearchComponent,EmployeeNameComponent]
})
export class AppRoutingModule { }
