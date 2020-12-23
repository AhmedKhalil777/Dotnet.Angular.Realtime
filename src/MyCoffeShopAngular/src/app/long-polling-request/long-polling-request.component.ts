import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-long-polling-request',
  templateUrl: './long-polling-request.component.html',
  styleUrls: ['./long-polling-request.component.scss']
})
export class LongPollingRequestComponent implements OnInit {

  userName = "Ahmed"
  status: string;
  product = 'Hello';
  size: number;
  intervalId;
  constructor() { }
  ngOnInit(): void {
   this.intervalId =  setInterval(this.poll, 1000)
  }

  poll = () => {
    fetch("https://localhost:5001/Polling", {
      method: "Post",
      body: JSON.stringify({ product: this.product, size: this.size }),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => { 
      if (response.status === 200) {
        response.json().then(res => {
          this.status = res.message;
          console.log(res.message);
         })
      }
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.intervalId);
  }

}
