import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-employee-detail',
  template: `
    <h1> Employee Detail </h1>
    <h3>{{errorMsg}}</h3>
    <ul *ngFor = "let employee of employees ">
    <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
  </ul>
  `,
  styles: [
    ` h1{ color: tomato; }
    ul li{ color: dodgerblue; }
    `
  ]
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  public errorMsg;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data,
                    error => this.errorMsg =error);
  }
  // Output is visible in console in Array.. as per code.. 
}
