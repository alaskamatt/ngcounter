import { Component, OnInit } from '@angular/core';
import Counter from '../counter';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  name = 'Counter Wall';

  countersList: Counter[];
  superCountersList: Counter[];

  constructor() { 
    this.countersList = [];
    this.superCountersList = [];
  }

  ngOnInit() {
    //this.create();
  }

  create() {
    const counter = new Counter();
    this.countersList.push(counter);

    if(this.countersList.length %6 === 0) {
      const total = this.countersList
        .map(c => {return c.totValue})
        .reduce((tot, val) => tot + val);

      const superCounter = new Counter();
      superCounter.totValue = total;

      this.superCountersList.push(superCounter);
      this.countersList = [];
    }
  }

}
