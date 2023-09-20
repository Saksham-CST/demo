import { Component, OnInit } from '@angular/core';
import {APIs} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'file';
  output: any;
  constructor(private service: APIs) {

  }
  ngOnInit(): void {
    this.getRecords();
  }
  getRecords() {
    this.service.getAPI().subscribe(output => {this.output = output;
    })
  }
  submit() {
    let object = {"createdAt":"2023-09-19T11:35:51.740Z","name":"Hector Crooks I","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/237.jpg","title":"title 1","author":"author 1","genre":"genre 1","publishedYear":"publishedYear 1","pageCount":"pageCount 1","ISBN":"ISBN 1","publisher":"publisher 1","id":"1"}
    this.service.postAPI(object).subscribe(output => {this.getRecords();
    })
  }
}
