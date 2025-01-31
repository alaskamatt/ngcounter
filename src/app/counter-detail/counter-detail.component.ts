import { Component, OnInit, Input } from '@angular/core';
import Counter from '../counter';

@Component({
  selector: 'app-counter-detail',
  templateUrl: './counter-detail.component.html',
  styleUrls: ['./counter-detail.component.css']
})
export class CounterDetailComponent implements OnInit {
  @Input() counter: Counter;

  constructor() { 
    this.counter = new Counter()
  }

  ngOnInit() {
  }

  increment() {
    this.counter.totValue++;
  }

  decrement() {
    this.counter.totValue--;
  }
}
