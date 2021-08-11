import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-test-employee',
  templateUrl: './test-employee.component.html',
  styleUrls: ['./test-employee.component.css']
})
export class TestEmployeeComponent implements OnInit {

  products: any = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("assets/data.json").subscribe(data =>{
      console.log(data);
      this.products = data;
    })
  }

}
