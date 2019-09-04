import { Component, OnInit } from '@angular/core';
import {Employee} from '../Employee';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
   
  

  constructor() { }
  
  // getEmployees(){
  //   this.clients =[
  //     {Id:101,name:'Priyanka',Dept:'IT',D_O_J:'10-12-2019', salary:27000},
  //     {Id:102,name:'Deepak',Dept:'Admin',D_O_J:'09-02-2016', salary:28000},
  //     {Id:103,name:'Anjali',Dept:'Facilities',D_O_J:'12-12-2018', salary:15000},
  //     {Id:104,name:'Avani',Dept:'HR',D_O_J:'08-03-2014', salary:30000},
  //     {Id:105,name:'Nilam',Dept:'IT',D_O_J:'06-02-2019', salary:29000},
  //   ];
  // }
  ngOnInit() {
    
  }
  // searchEmployee1()
  // {
  //   alert("A");
  // }
  // searchEmployee(value:String){
  //   alert("A");
  //   alert("hello" +value);
  // }

}
  