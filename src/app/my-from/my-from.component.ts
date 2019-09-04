import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Employee } from '../Employee';
import {ApiService} from '../api.service';
import { Client } from 'src/Client';
@Component({
  selector: 'app-my-from',
  templateUrl: './my-from.component.html',
  styleUrls: ['./my-from.component.css']
})
export class MyFromComponent implements OnInit {
  client:Client;
  clients:Client[];
  constructor(private service:ApiService,private fb : FormBuilder) { }
  getServ() : Client[]{
    this.service.getService().subscribe(data=>this.clients=data);
    return this.clients;
  }

  InsertStudentForm : FormGroup;
  ngOnInit() {
    this.InsertStudentForm = this.fb.group({

      'clientId' : [],

      'account':[],
      
      'clientName' :[],
      
      'stringdepart':[],
      
      'projectName':[],
      'arrivalDate':[],
      'deptDate':[],
      'agenda':[],
       ' eventData':[],
       'stringarrive':[],
      
      });
      this.getServ();
  }
  OnInsertStudent(){
    console.log(this.InsertStudentForm.value);
    let client=this.InsertStudentForm.value
   
    // console.log(Employee);
    // this.Employees =[
    //   {Id:101,name:'Priyanka',Dept:'IT',D_O_J:'10-12-2019', salary:27000},
    //   {Id:102,name:'Deepak',Dept:'Admin',D_O_J:'09-02-2016', salary:28000},
    //   {Id:103,name:'Anjali',Dept:'Facilities',D_O_J:'12-12-2018', salary:15000},
    //   {Id:104,name:'Avani',Dept:'HR',D_O_J:'08-03-2014', salary:30000},
    //   {Id:105,name:'Nilam',Dept:'IT',D_O_J:'06-02-2019', salary:29000},
    // ];
     alert(this.clients.length);
     this.service.InsertClient(client);
     alert(this.clients.length);
  }

}
