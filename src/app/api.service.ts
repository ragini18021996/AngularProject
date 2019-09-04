import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
 
import { Observable} from 'rxjs';
import {Client} from '../Client';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  clients:Client[];
  constructor(private _http : HttpClient) { 

  }

  Hello() : string
  {
    return "a";
  }
  getService() : Observable<Client[] >
  {
    return this._http.get<Client[]>("/EventBasedCalendar/view");
  }

  InsertClient(client : Client) : Observable<any>
  {
    console.log("In Serv Insert" + client.clientName );
return this._http.post("/EventBasedCalendar/view", client)
}
}