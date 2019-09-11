import { Component, OnInit } from '@angular/core';
import Counter from '../counter';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {

  countersList: Counter[];
  name = 'Counter Wall';

  constructor() { 
    this.countersList = [];
  }

  ngOnInit() {
  }

  create() {
    const counter = new Counter();
    this.countersList.push(counter);
  }

}
