import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {

  public salesProducts = [
    { id: 1, name: 'Acs', price: '6666' },
    { id: 2, name: 'Phones', price: '7777' },
    { id: 3, name: 'Fashion', price: '8888' },
    { id: 4, name: 'Electronics', price: '9999' },
  ];

  public topProducts = [
    { id: 1, name: 'Phone', price: '6666' },
    { id: 2, name: 'Laptop', price: '7777' },
    { id: 3, name: 'Decor', price: '8888' },
    { id: 4, name: 'Electronics', price: '9999' },
  ];

  public todayDeals = [
    { id: 1, name: 'Watches', price: '6666' },
    { id: 2, name: 'Fridges', price: '7777' },
    { id: 3, name: 'Sofas', price: '8888' },
    { id: 4, name: 'Lighting', price: '9999' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
