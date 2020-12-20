import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajaxrequesting',
  templateUrl: './ajaxrequesting.component.html',
  styleUrls: ['./ajaxrequesting.component.scss']
})
export class AJAXRequestingComponent implements OnInit {

  constructor() { }

  status: any;
  product: string; 
  size: number;
  ngOnInit(): void {

  }

  changeCoffee(): void {
    fetch("https://localhost:5001/Polling", {
      method: "Post",
      body: JSON.stringify({ product: this.product, size: this.size }),
      headers: {
        'content-type': 'application/json'
      }
    }).then(Response => { Response.text() })
      .then(id => { 
        this.status = id;
      });
  }

}
