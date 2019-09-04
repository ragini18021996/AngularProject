import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Employee } from '../Employee';
@Component({
  selector: 'app-employee-name',
  templateUrl: './employee-name.component.html',
  styleUrls: ['./employee-name.component.css']
})
export class EmployeeNameComponent implements OnInit {

  Employee:Employee;
  Id;
  sub;
  Employees:Employee[];
  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,
) 
{
}
 
  ngOnInit(){
    this.Employees =[
      {Id:101,name:'Priyanka',Dept:'IT',D_O_J:'10-12-2019', salary:27000},
      {Id:102,name:'Deepak',Dept:'Admin',D_O_J:'09-02-2016', salary:28000},
      {Id:103,name:'Anjali',Dept:'Facilities',D_O_J:'12-12-2018', salary:15000},
      {Id:104,name:'Avani',Dept:'HR',D_O_J:'08-03-2014', salary:30000},
      {Id:105,name:'Nilam',Dept:'IT',D_O_J:'06-02-2019', salary:29000},
    ];
    this.sub=this._Activatedroute.params.subscribe(params => { 
      this.Id = params['Id']; 
   this.Employee=this.Employees.find(e => e.Id==this.Id);    

  });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
