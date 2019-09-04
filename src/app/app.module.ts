import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule,RouterTable } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MyFromComponent } from './my-from/my-from.component';
import {HttpClientModule} from '@angular/common/http';
  
@NgModule({
  declarations: [
    AppComponent,
    MyFromComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,FormsModule,ReactiveFormsModule,HttpClientModule,
    RouterModule.forRoot(RouterTable)
    //   {n
    //     path : '', 
    //     component : HomeComponent
    //   },
    //   {
    //     path:'Employees',
    //     component:EmployeeComponent
    //   },
    //   {
    //     path :'searchEmployee' , 
    //     component : EmployeeSearchComponent
    //   },
      
    // ])
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
