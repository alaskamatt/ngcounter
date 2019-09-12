import { Component, OnInit } from '@angular/core';
import Counter from '../counter';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {

  countersList: Counter[];
  superCountersList: Counter[];
  name = 'Counter Wall';

  constructor() { 
    this.countersList = [];
    this.superCountersList = [];
  }

  ngOnInit() {
    //this.create();
  }

  create() {
    const counter = new Counter();
    if(this.countersList.length <= 4) {
      this.countersList.push(counter);
    } else {
      this.superCountersList.push(counter);
      this.countersList = [];
    }
  }

}
