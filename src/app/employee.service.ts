import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IEmployee } from './employee';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // getEmployees(){
  //   return [
  //     {"id":1, "name": "Andrew", age: 34},
  //     {"id":2, "name": "Brandon", age: 29},
  //   ];
  // }
  
  private _url:string ="assets/data/employees.json";
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url).pipe(
                    catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
