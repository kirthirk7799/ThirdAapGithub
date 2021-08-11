import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styleUrls: ['./product-widget.component.css']
})
export class ProductWidgetComponent implements OnInit {

  @Input() products:[];

  test: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  offers() {
    this.test = !this.test;
  }

}
