import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }

  addemployee(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/employees',data);
  }

  updateemployee(id:number,data:any):Observable<any>{
    return this.http.put(`http://localhost:3000/employees/${id}`,data);
  }

  getemployee():Observable<any>{
    return 	this.http.get("http://localhost:3000/employees");
  }

  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`http://localhost:3000/employees/${id}`);
  }
}
