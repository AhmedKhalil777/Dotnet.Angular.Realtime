import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajaxrequesting',
  templateUrl: './ajaxrequesting.component.html',
  styleUrls: ['./ajaxrequesting.component.scss']
})
export class AJAXRequestingComponent implements OnInit {

  constructor() { }
  userName = "Ahmed"
  status: string;
  product = 'Hello';
  size: number;
  ngOnInit(): void {

  }

  changeCoffee(): void {
    fetch("https://localhost:5001/Ajax", {
      method: 'POST',
      body: JSON.stringify({ product: this.product, size: this.size }),
      headers: {
        'content-type': 'application/json'
      }
      
    }).then(response =>
      response.json().then(
      ).then(res => { this.status = res.message }));

  }
}
