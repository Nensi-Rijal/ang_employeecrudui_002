import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee, IEmployee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl:string = 'https://localhost:7174/api/Cards';
  constructor(private httpClient: HttpClient) { }

  getAllEmployeeData(): Observable<IEmployee>{
    return this.httpClient.get<IEmployee>(this.baseUrl);
  }

  getSingleEmployeeData(id: string): Observable<IEmployee>{
    return this.httpClient.get<IEmployee>(this.baseUrl + "/" + id);
  }

  createEmployee(data:Employee): Observable<Employee>{
    return this.httpClient.post<Employee>(this.baseUrl, data);
  }

  EditEmployee(id:string , data:Employee): Observable<Employee>{
    return this.httpClient.put<Employee>(this.baseUrl + "/" + id, data);
  }

  DeleteEmployee(id: string): Observable<Employee>{
    return this.httpClient.delete<Employee>(this.baseUrl + "/" + id);
  }
}
